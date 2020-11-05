<template>
  <div class="answer-main">
    <div class="title" v-if="showPart.includes('title')">
      <h2>
        <router-link
          :to="{name: type === 0 ? 'detailsArticles' : 'detailsQuestions', params: { id: item.id }}">
          {{ transtedInfo.title }}
        </router-link>
      </h2>
    </div>

    <div class="creator-info clearfix" v-if="showPart.includes('creator') && item.author && item.author.id">
      <router-link :to="{name: 'peopleMain', params: {id: item.author ? item.author.id : 0}}">
        <img :src="item.author ? item.author.avatar_url : ''" alt="">
        <div class="detail">
          <p class="username">{{item.author ? item.author.name : ''}}</p>
          <p class="introduce">{{item.author ? item.author.headline: ''}}</p>
        </div>
      </router-link>
    </div>

    <div class="vote" v-if="showPart.includes('votes')">
      <span>{{ item.status ? 10 : 0 }} 人赞同了该回答</span>
    </div>
    <div class="content-wrapper clearfix">
      <div class="shortCut" v-if="showType === 'excerpt'">
        <div class="cover" v-if="transtedInfo.cover">
          <img :src="transtedInfo.cover" alt="">
        </div>
        <div class="excerpt">
          <span>
            <span v-html="item.excerpt"></span>
            <el-button class="btn-no-padding" type="text" icon="el-icon-arrow-down" @click="showType = 'all'">阅读全文</el-button>
          </span>
        </div>
      </div>

      <div class="content" v-if="showType === 'all'">
        <router-link v-if="showPart.includes('creator')" class="mini-creator-info clearfix"
        :to="{name: 'peopleMain', params: {id: item.author ? item.author.id : 0}}">
          <img class="avatar" :src="item.author ? item.author.avatar_url : ''" alt="">
          <p class="username">{{item.author ? item.author.name : ''}}</p>
        </router-link>
        <div v-html="item.content"></div>
        <el-button class="btn-no-padding" type="text" icon="el-icon-arrow-up" @click="showType = 'excerpt'">收起</el-button>
      </div>
    </div>
    <list-item-actions
      class="actions"
      v-bind="$attrs"
      v-on="$listeners"
      :status="item.status"
      :showActionItems="['vote', 'thanks', 'comment', 'share', 'favorite', 'more', 'setting']"
      :type="item.type"
      :itemId="item.id"
      :commentCount="item.comment ? item.comment.length : 0"
      :thanks_count="22"
      :voteup_count="55"
      :relationship="33"
      :commentShowType="showType"
      :activeUser="1"
      :metrics_area="1"
    />
  </div>
</template>

<script>
import ListItemActions from '@/components/ListItemActions.vue'

export default {
  props: ['item', 'showPart', 'type'],
  inheritAttrs: false,
  components: {
    ListItemActions
  },
  data() {
    return {
      showType: 'excerpt',
      showActionItem: ['vote', 'thanks', 'comment', 'share', 'favorite', 'more']
    }
  },
  computed: {
    transtedInfo() {
      if (this.type === 0) {
        return {
          id: this.item.id,
          title: this.showPart.includes('title') ? this.item.title : '',
          cover: this.item.cover || ''
        }
      }
      if (this.type === 2 && this.showPart.includes('title')) {
        return {
          id: this.item.question.id,
          title: this.item.question.title,
          cover: this.item.thumbnail || ''
        }
      }
      return {
        id: 0,
        title: '',
        cover: ''
      }
    },
    showActionItems() {
      if (this.$route.name === 'peopleArticles' || this.$route.name === 'peopleMain') {
        return ['vote', 'thanks', 'comment', 'share', 'favorite', 'setting']
      }
      return ['vote', 'thanks', 'comment', 'share', 'favorite', 'more']
    }
  }
}
</script>
