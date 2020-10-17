<template>
  <div>
    <main-list-nav :type="type" />
    <el-card>
      <div class="card-content">
        <!-- <route-view v-for="(item, index) in fakeInfo" :key="index" :item="item"
        :index="index" :type="item.type" :showPart="['title']"/> -->
        <!-- <route-view></route-view> -->
        AABB
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
          id: 'f7b5280a2723f04aef12c08c92d77fe5',
          type: 'people',
          url: 'https://api.zhihu.com/people/f7b5280a2723f04aef12c08c92d77fe5',
          user_type: 'people',
          url_token: 'liu-zhen-han-10',
          name: '刘震撼',
          headline: '关注我，给你一个另外看世界、看人心的角度',
          avatar_url: 'https://pic1.zhimg.com/50/v2-4fe922ce06bca03aafd30cb61c975c65_m.jpg',
          is_org: false,
          gender: 1,
          badge: [],
          followers_count: 17310,
          is_following: false,
          is_followed: false
        },
        created_time: 1601995998,
        updated_time: 1602536908,
        voteup_count: 21959,
        thanks_count: 2845,
        comment_count: 1321,
        is_copyable: false,
        question: {
          id: 413998242,
          type: 'question',
          url: 'https://api.zhihu.com/questions/413998242',
          author: {
            id: '79038fd2246c309645e448313402e507',
            type: 'people',
            url: 'https://api.zhihu.com/people/79038fd2246c309645e448313402e507',
            user_type: 'people',
            url_token: 'dong-gong-nai-tu-nuo-nuo-z',
            name: '小小',
            headline: '',
            avatar_url: 'https://pic2.zhimg.com/50/v2-28ad27c5ad99657b0b9604aa6f129534_m.jpg',
            is_org: false,
            gender: 0,
            badge: [],
            followers_count: 238,
            is_following: false,
            is_followed: false
          },
          title: '作为一个无背景有实力肯努力的女明星，怎么样才能在娱乐圈里保持清白?',
          created: 1597309674,
          answer_count: 315,
          follower_count: 1648,
          comment_count: 20,
          bound_topic_ids: [
            1793,
            7340,
            12443
          ],
          is_following: false,
          excerpt: '',
          relationship: {
            is_author: false
          },
          detail: '',
          question_type: 'normal'
        }
        // author: {
        //   avatar_url: '...',
        //   headline: 'abc',
        //   name: 'Tom'
        // },
        // relationship: {
        //   is_nothelp: false,
        //   is_thanked: false,
        //   voting: 0
        // },
        // question: {
        //   author: {
        //     avatar_url: 'cdefg',
        //     headline: 'ok  ',
        //     name: 'John'
        //   },
        //   answer_count: 18,
        //   comment_count: 1,
        //   excerpt: '"..."',
        //   title: '"abc"',
        //   type: '"question"',
        //   url: '"ab.com"'
        // },
        // comment_count: 41,
        // content: '"aaaa"',
        // excerpt: '"bbbb"',
        // thanks_count: 69,
        // thumbnail: '"uuu"',
        // type: '"answer"',
        // voteup_count: 771
      }
    }
  }
}
</script>
