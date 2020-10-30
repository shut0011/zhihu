<template>
  <div class="article-details" :v-loading="loading">
    <div class="article-wrapper">
      <div class="cover">
        <img :src="articleData.cover" alt="">
      </div>
      <h1 class="title">{{ articleData.title }} </h1>
      <div class="author-info" v-if="articleData.author">
        <div class="avatar">
          <img :src="articleData.author.avatarUrl || ''" alt="">
        </div>
        <div class="userinfo">
          <p class="username">
            {{articleData.author.name}}
          <p class="headline">
            {{ articleData.author.headline }}
          </p>
        </div>
      </div>

      <div class="content" v-html="articleData.content"></div>
      <list-item-actions
        class="actions m-b-25"
        v-bind="$attrs"
        v-on="$listeners"
        v-if="articleData.status"
        :status="articleData.status"
        :itemId="articleData.id"
        :type="articleData.type"
        :commentCount="articleData.comment ? articleData.comment.length : 0"
        :commentShowType="commentShowType"
        :showActionItems="showActionItems"
      />
    </div>
  </div>
</template>

<script>
import ListItemActions from '@/components/ListItemActions.vue'
import request from '@/service'

export default {
  data() {
    return {
      showActionItems: ['vote', 'thanks', 'comment', 'share', 'favorite', 'more'],
      loading: false,
      articleData: {},
      commentShowType: 'excerpt'
    }
  },
  components: {
    ListItemActions
  },
  mounted() {
    this.loading = true
    this.getArticle()
  },
  methods: {
    async getArticle() {
      console.log('getArticle route =', this.$route)
      await request.get('/articles', {
        articleId: this.$route.params.id
      }).then((res) => {
        console.log('getArticle data = ', res.data)
        if (res.data.status === 200) {
          this.articleData = res.data.content
          this.loading = false
        } else {
          this.$Message.error('获取文章失败，请稍后再试')
          this.$route.go(-1)
        }
      })
    }
  }
}
</script>
