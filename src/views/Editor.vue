<template>
  <div class="editor">
    <editor-header @releaseArticles="releaseArticles"/>
    <div class="content m-t-50">
      <el-input v-model="title" class="m-b-15" size="medium" placeholder="请输入标题"/>
      <rich-text-editor ref='textEditor' :content='content' :placeHolder="placeHolder"
      @updateContent="updateContent"/>
    </div>

    <div class="content m-t-50">
      <el-upload v-if="imgUrl === ''" class="img-upload m-b-15" drag action="/imgs/upload"
      :on-success=uploadSuc accept=".jpg, .jpeg, .JPG, .JPEG, .png, .PNG">
      <i class="el-icon-upload"></i>
      <div>添加题图</div>
      </el-upload>
      <img v-if="imgUrl !==  ''" class="oldImg m-b-15" :src=imgUrl @click="$refs.hiddenUpload.click()">
    </div>
  </div>
</template>

<script>
import EditorHeader from '@/components/EditorHeader.vue'
import RichTextEditor from '@/components/RichTextEditor.vue'
import request from '@/service'
import { getCookies } from '@/lib/utils'
import { imgDec } from '@/lib/config.js'

export default {
  components: {
    EditorHeader,
    RichTextEditor
  },
  data() {
    return {
      title: '',
      content: '',
      contentText: '',
      placeHolder: '请输入正文',
      imgUrl: ''
    }
  },
  mounted() {
    // 判断当前路由参数，若articleId不为0，则获取文章信息
    if (parseFloat(this.$route.params.articleId) !== 0) {
      this.getArticleInfo()
    }
  },
  methods: {
    releaseArticles() {
      // 判断当前路由参数的articleId是否为0,0--新建文章；!0--修改文章
      if (parseFloat(this.$route.params.articleId) !== 0) {
        this.updateArticle()
      // 若路由参数中articleId为0，则触发createArticle方法
      } else {
        this.createArticle()
      }
    },
    updateContent(content, contentText) {
      this.content = content
      this.contentText = contentText
    },
    uploadSuc(response) {
      this.imgUrl = `${imgDec}${response.fileName}`
    },
    async createArticle() {
      await request.post('/articles', {
        content: this.content,
        excerpt: this.contentText.length > 100 ? this.contentText.slice(0, 100) : this.contentText,
        title: this.title,
        userId: getCookies('id')
      }).then((res) => {
        if (res.data.status === 201) {
          this.$Message.success('新建文章成功')
        } else {
          this.$Message.error(res.error)
        }
      })
    },
    async getArticleInfo() {
      await request.get('/articles', {
        articleId: this.$route.params.articleId
      }).then((res) => {
        if (res.data.status === 200) {
          const articleInfo = res.data.content
          this.content = articleInfo.content
          this.imgUrl = articleInfo.cover
          this.title = articleInfo.title
          this.$refs.textEditor.updateContent(this.content)
        } else {
          this.$Message.error('获取文章内容失败，请稍后再试')
          this.$router.go(-1)
        }
      })
    },
    async updateArticle() {
      await request.put('/articles', {
        articleId: this.$route.params.articleId,
        content: this.content,
        excerpt: this.contentText.slice(0, 100),
        title: this.title,
        imgUrl: this.imgUrl,
        userId: getCookies('id')
      }).then((res) => {
        if (res.data.content === [0]) {
          this.$Message.error('文章修改失败，请稍后再试')
        } else {
          this.$Message.success('文章修改成功')
          this.$router.push({
            name: 'peopleArticles'
          })
        }
      })
    }
  }
}
</script>
