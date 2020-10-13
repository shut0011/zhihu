<template>
  <div>
    <div class="actions">
      <el-button v-if="showActionItems.indexOf('hot') >= 0" class="btn-text-gray"
        size="medium" type="text">
        <span class="el el-icon-fakezhihu-fire"></span>
        {{metrics_area.text}}
      </el-button>

      <el-button v-if="showActionItems.includes('vote')" size="small" type="primary"
        icon="el-icon-caret-top" :plain="!JSON.parse(activeStatus.voteUp).includes(userId)"
        @click="updateStatus('voteUp', JSON.parse(activeStatus.voteUp).includes(userId) ? 'pull' : 'add')"
      >
        赞同 {{JSON.parse(activeStatus.voteUp).length}}
      </el-button>

      <el-button v-if="showActionItems.includes('vote')" size="small" type="primary"
        icon="el-icon-caret-bottom" :plain="!JSON.parse(activeStatus.voteDown).includes(userId)"
        @click="updateStatus('voteDown', JSON.parse(activeStatus.voteDown).includes(userId) ? 'pull' : 'add')"
      />

      <el-button v-if="showActionItem.indexOf('comment') >= 0" class="btn-text-gray m-l-25"
        size="medium" type="text">
        <span class="el el-icon-fakezhihu-comment"></span>
        {{comment_count}} 条评论
      </el-button>
      <el-button v-if="showActionItems.indexOf('share') >= 0" class="btn-text-gray m-l-25"
        size="medium" type="text" icon="el-icon-share">分享</el-button>
      <el-button v-if="showActionItems.indexOf('favorite') >= 0" class="btn-text-gray m-l-25"
        size="medium" type="text" icon="el-icon-star-on">收藏</el-button>
      <el-button v-if="showActionItem.indexOf('thanks') >= 0" class="btn-text-gray m-l-25"
        size="medium" type="text">
        <span class="el el-icon-fakezhihu-heart"></span>
        {{thanks_count}} 个感谢
      </el-button>

      <el-dropdown v-if="showActionItems.indexOf('more') >= 0" placement="bottom" class="m-l-25">
        <el-button class="btn-text-gray" size="medium" type="text" icon="el-icon-more">
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>没有帮助</el-dropdown-item>
          <el-dropdown-item>举报</el-dropdown-item>
          <el-dropdown-item>申请授权</el-dropdown-item>
          <el-dropdown-item>不感兴趣</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comment_count', 'thanks_count', 'voteup_count', 'metrics_area', 'showActionItems'],
  data() {
    return {}
  }
}
</script>
