<template>
  <div>
    <main-list-nav :type="type" />
    <el-card :v-loading="loading">
      <div class="card-content">
        <router-view v-for="(item, index) in fakeInfo" :key="index" :item="item"
        :index="index" :type="item.type" :showPart="['creator', 'all', 'title', 'votes', 'excerpt']"/>
      </div>
    </el-card>
  </div>
</template>

<script>
import request from '@/service'
import MainListNav from '@/components/MainListNav.vue'
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
// const axios = require('axios')

export default {
  components: {
    MainListNav
  },
  data() {
    return {
      type: 'main',
      loading: false,
      fakeInfo: {},
      fakeInfo11: [
        {
          id: 161246203,
          type: 'article',
          url: 'https://api.zhihu.com/articles/161246203',
          status: {
            userId: 5
          },
          author: {
            id: 'a0809f84f172f7eaf52863097557a6b1',
            type: 'people',
            url: 'https://api.zhihu.com/people/a0809f84f172f7eaf52863097557a6b1',
            user_type: 'people',
            url_token: 'wakestar',
            name: '森野酱',
            headline: '公众号：森野树 新媒体编辑',
            avatar_url: 'https://pic2.zhimg.com/50/v2-7746ebeb68744929c85e593ef97886dd_m.jpg',
            is_org: false,
            gender: 0,
            badge: [],
            followers_count: 772,
            is_following: false,
            is_followed: false
          },
          title: '日本举办了一场“可以偷的艺术展”，不到10分钟全被偷光！网友：说好的国民素质高呢？',
          excerpt_title: '',
          image_url: 'https://pic1.zhimg.com/50/v2-15a0026befebeabbd380f605df9d2d00_hd.jpg',
          comment_permission: 'all',
          created: 1594964682,
          updated: 1594965439,
          voteup_count: 2497,
          voting: 0,
          upvoted_followees: [],
          comment_count: 601,
          linkbox: {
            pic: '',
            title: '',
            url: '',
            category: ''
          },
          excerpt: '位于日本东京品川区的Same Gallery，最近举行了一场与众不同的艺术展&mdash;&mdash;「 可以偷的艺术展（盗めるアート展）」，展品以当代艺术家和摄影师的作品为主，展出时间表定为7月10日到7月19日，免费入场，无人看守，24小时开放，当展览上的所有作品全都被偷光时&hellip;',
          excerpt_new: '位于日本东京品川区的Same Gallery，最近举行了一场与众不同的艺术展&mdash;&mdash;「 可以偷的艺术展（盗めるアート展）」，展品以当代艺术家和摄影师的作品为主，展出时间表定为7月10日到7月19日，免费入场，无人看守，24小时开放，当展览上的所有作品全都被偷光时&hellip;',
          preview_type: 'default',
          preview_text: '',
          column: {
            id: 'senyeshu',
            type: 'column',
            url: 'https://api.zhihu.com/columns/senyeshu',
            author: {
              id: '0',
              type: 'people',
              url: '',
              user_type: 'people',
              url_token: '',
              name: '匿名用户',
              headline: '',
              avatar_url: 'https://pic4.zhimg.com/aadd7b895_m.jpg'
            },
            title: '森野树',
            image_url: 'https://pic3.zhimg.com/4b70deef7_b.jpg',
            comment_permission: 'public',
            intro: '用心感受生活中的美',
            updated: 1591487526,
            is_following: false
          },
          content: '<p>位于日本东京品川区的Same Gallery，最近举行了一场与众不同的艺术展——「<b>可以偷的艺术展（盗めるアート展）</b>」，展品以当代艺术家和摄影师的作品为主，展出时间表定为7月10日到7月19日，免费入场，无人看守，24小时开放，当展览上的所有作品全都被偷光时，展览便宣告结束。</p>',
          is_labeled: false,
          visited_count: 445243
        },
        {
          id: 1530699073,
          type: 'answer',
          url: 'https://api.zhihu.com/answers/1530699073',
          author: {
            id: '68ce0b419bf5cc5a6565892395402873',
            type: 'people',
            url: 'https://api.zhihu.com/people/68ce0b419bf5cc5a6565892395402873',
            user_type: 'people',
            url_token: 'liu-xuan-57-47',
            name: '程序员cxuan',
            headline: 'Java建设者&amp;程序员cxuan 双料号主。',
            avatar_url: 'https://pic4.zhimg.com/50/v2-2d54d3ff211db09cc8a309bece9c0f0b_m.jpg',
            is_org: false,
            gender: 1,
            badge: [],
            followers_count: 2124,
            is_following: false,
            is_followed: false
          },
          created_time: 1603021857,
          updated_time: 1603021857,
          voteup_count: 630,
          thanks_count: 178,
          comment_count: 34,
          is_copyable: true,
          question: {
            id: 300650155,
            type: 'question',
            url: 'https://api.zhihu.com/questions/300650155',
            author: {
              id: '0',
              type: 'people',
              url: '',
              user_type: 'people',
              url_token: '',
              name: '匿名用户',
              headline: '',
              avatar_url: 'https://pic4.zhimg.com/aadd7b895_m.jpg'
            },
            title: '计算机基础知识对程序员来说有多重要？',
            created: 1540905140,
            answer_count: 119,
            follower_count: 4295,
            comment_count: 4,
            bound_topic_ids: [
              707,
              4624,
              10033,
              15165,
              16440
            ],
            is_following: false,
            excerpt: '',
            relationship: {
              is_author: false
            },
            detail: '',
            question_type: 'normal'
          },
          thumbnail: 'https://pic4.zhimg.com/50/v2-56a39e753d04300c8465fe842758febb_200x112.jpg',
          excerpt: '不知道这个回答是否能成为热门回答，不过我自己作为一个工作三年的码渣来说，想要变成工程师或者往更高的层次走，那么计算机基础就是内功。 或许你现在学这些知识看不到终点，看不到方向，看不到对岸，但还是要给自己一点信心，因为没有走不完的路，啃不完的书。成人后，才发现，学点知识，很舒服。 扯了一些题外话，自从我做公众号以来，也写了一些关于计算机基础方面的知识，同时我也囤了很多计算机相关的书 我的梦想是想把这&hellip;',
          excerpt_new: '不知道这个回答是否能成为热门回答，不过我自己作为一个工作三年的码渣来说，想要变成工程师或者往更高的层次走，那么计算机基础就是内功。 或许你现在学这些知识看不到终点，看不到方向，看不到对岸，但还是要给自己一点信心，因为没有走不完的路，啃不完的书。成人后，才发现，学点知识，很舒服。 扯了一些题外话，自从我做公众号以来，也写了一些关于计算机基础方面的知识，同时我也囤了很多计算机相关的书 我的梦想是想把这&hellip;',
          preview_type: 'default',
          preview_text: '',
          reshipment_settings: 'allowed',
          content: '<p>不知道这个回答是否能成为热门回答，不过我自己作为一个工作三年的码渣来说，想要变成工程师或者往更高的层次走，那么计算机基础就是内功。</p><p>或许你现在学这些知识看不到终点，看不到方向，看不到对岸，但还是要给自己一点信心，因为没有走不完的路，啃不完的书。成人后，才发现，学点知识，很舒服。</p><p>扯了一些题外话，自从我做公众号以来，也写了一些关于计算机基础方面的知识，同时我也囤了很多计算机相关的书',
          mark_infos: [],
          relationship: {
            is_thanked: false,
            is_nothelp: false,
            voting: 0,
            upvoted_followee_ids: []
          },
          is_labeled: false,
          visited_count: 29978
        },
        {
          id: 1475581350,
          type: 'answer',
          url: 'https://api.zhihu.com/answers/1475581350',
          author: {
            id: '8a8ea3d88a84ac3af280292b773ae03e',
            type: 'people',
            url: 'https://api.zhihu.com/people/8a8ea3d88a84ac3af280292b773ae03e',
            user_type: 'people',
            url_token: 'huang-yang-bo-85',
            name: '清风徐来',
            headline: 'Java基础学习交流群：697888503，不懂的随时来问。',
            avatar_url: 'https://pic2.zhimg.com/50/v2-73d9f4678422eae1129df75cfb212f47_m.jpg',
            is_org: false,
            gender: 1,
            badge: [],
            followers_count: 12489,
            is_following: false,
            is_followed: false
          },
          created_time: 1600223623,
          updated_time: 1600223623,
          voteup_count: 574,
          thanks_count: 79,
          comment_count: 195,
          is_copyable: false,
          question: {
            id: 265453795,
            type: 'question',
            url: 'https://api.zhihu.com/questions/265453795',
            author: {
              id: 'ff8372863c443df34fe66d8262bed60d',
              type: 'people',
              url: 'https://api.zhihu.com/people/ff8372863c443df34fe66d8262bed60d',
              user_type: 'people',
              url_token: 'xiaofengqing',
              name: '晓风轻',
              headline: '世上的路有千万条，而我却选择了最艰难的那一条',
              avatar_url: 'https://pic1.zhimg.com/50/v2-d2685c342f97eca6aeb2fe5806a4fdef_m.jpg',
              is_org: false,
              gender: 1,
              badge: [],
              followers_count: 9612,
              is_following: false,
              is_followed: false
            },
            title: '你见过最烂的代码长什么样子？',
            created: 1515683594,
            answer_count: 333,
            follower_count: 2435,
            comment_count: 16,
            bound_topic_ids: [
              707,
              1354,
              5531,
              11696,
              34476
            ],
            is_following: false,
            excerpt: '',
            relationship: {
              is_author: false
            },
            detail: '',
            question_type: 'normal'
          },
          thumbnail: 'https://pic4.zhimg.com/50/v2-a9f0780ad7448fe773f7fbab4a03f26b_200x112.jpg',
          excerpt: '1.一行代码就可以搞定的，非要写的啰里啰嗦。不要给我扯什么可读性，以下代码一行的写法可读性也更好。',
          excerpt_new: '1.一行代码就可以搞定的，非要写的啰里啰嗦。不要给我扯什么可读性，以下代码一行的写法可读性也更好。',
          preview_type: 'default',
          preview_text: '',
          reshipment_settings: 'disallowed',
          content: '<p><b>1.一行代码就可以搞定的，非要写的啰里啰嗦。不要给我扯什么可读性，以下代码一行的写法可读性也更好。2.一行代码就可以搞定的，非要写的啰里啰嗦。不要给我扯什么可读性，以下代码一行的写法可读性也更好。3.一行代码就可以搞定的，非要写的啰里啰嗦。不要给我扯什么可读性，以下代码一行的写法可读性也更好。1.一行代码就可以搞定的，非要写的啰里啰嗦。不要给我扯什么可读性，以下代码一行的写法可读性也更好。</b></p>',
          mark_infos: [],
          relationship: {
            is_thanked: false,
            is_nothelp: false,
            voting: 0,
            upvoted_followee_ids: []
          },
          is_labeled: false,
          visited_count: 170866
        }
      ]
    }
  },
  watch: {
    $route: 'fetchDate'
  },
  mounted() {
    // this.fetchDate()
  },
  methods: {
    fetchDate() {
      this.loading = true
      if (this.$route.name === 'home') {
        this.getNormalList()
      } else if (this.$route.name === 'hot') {
        this.getHotList()
      } else {
        // this.getNormalList()
      }
      this.loading = false
    },
    async getHotList() {
      await request.get('/api/v3/feed/topstory/hot-list-web', {
      // await request.get('/hot-list-web', {
        limit: 6,
        desktop: true
      }).then((res) => {
        console.log('getHotList res=', res)
        console.log('getHotList res.data.data=', res.data.data)
        if (res.status === 200) {
          this.fakeInfo = []
          this.fakeInfo = res.data.data
        }
      })
    },
    async getNormalList() {
      await request.get('/articles/list').then((res) => {
        // console.log('getNormalList res =', res)
        console.log('getNormalList data =', res.data)
        if (res.status === 200) {
          this.fakeInfo = res.data.list
          // console.log('getNormalList fakeInfo =', this.fakeInfo)
        }
      })
    }
  },
  created() {
    this.$nextTick(function() {
      this.fetchDate()
    })
  }
}
</script>
