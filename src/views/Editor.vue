<template>
  <div class="editor">
    <editor-header @releaseArticles="releaseArticles"/>

    <div class="userInfo" v-if="!isLogin">
      <route-link :to="{ name: 'signup' }">登录</route-link>
    </div>

    <div class="content m-t-50">
      <el-upload v-if="imgUrl === ''" class="img-upload m-b-15" drag action="/imgs/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success=uploadSuc :limit="3" accept=".jpg, .jpeg, .JPG, .JPEG, .png, .PNG" multiple>
        <i class="el-icon-upload"></i>
        <div ref="hiddenUpload">添加题图</div>
      </el-upload>

      <!-- 此处无法显示本地图片，部署在服务器上就好，当前未部署，只能在伪造一个Img -->
      <!-- <img class="oldImg m-b-15" src="https://pic3.zhimg.com/v2-0cd1f1c469f59713d397864275f9349e_r.jpg" alt="" /> -->
      <img v-if="imgUrl !==  ''" class="oldImg m-b-15" :src=imgUrl alt="" @click="imgClick()">

      <el-input v-model="title" class="m-b-15" size="medium" placeholder="请输入标题(最多50个字)"/>
      <rich-text-editor ref="textEditor" :content="content" :placeHolder="placeHolder"
      @updateContent="updateContent"/>
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
      imgUrl: '',
      isLogin: 'true'
    }
  },
  mounted() {
    this.checkLogin()
    // 判断当前路由参数，若articleId不为0，则获取文章信息
    if (parseFloat(this.$route.params.articleId) !== 0) {
      this.getArticleInfo()
    }
  },
  methods: {
    imgClick() {
      console.log('image click')
      this.imgUrl = ''
      // this.$refs.hiddenUpload.click()
    },
    async checkLogin() {
      await request.get('users/checkLogin').then((res) => {
        if (res.status === 200) {
          this.name = res.data.name
          this.isLogin = true
        } else {
          this.$router.push({ name: 'signup' })
          this.isLogin = false
        }
      })
    },
    handleRemove(file) {
      console.log('handleRemove file =', file)
    },
    handlePreview(file) {
      console.log('handlePreview file =', file)
    },
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
      this.imgUrl = `${imgDec}${response.url}`
      console.log('uploadSuc imgUrl =', this.imgUrl)
    },
    async createArticle() {
      await request.post('/articles', {
        content: this.content,
        excerpt: this.contentText.length > 100 ? this.contentText.slice(0, 100) : this.contentText,
        title: this.title,
        imgUrl: this.imgUrl,
        userId: getCookies('id')
      }).then((res) => {
        if (res.data.status === 201) {
          this.$Message.success('新建文章成功')
          this.$router.push(`/people/${getCookies('id')}/articles`)
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
      console.log('updateArticle  id, imgUrl, userId =', this.$route.params.articleId, this.imgUrl, getCookies('id'))
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
          this.$router.push(`/people/${getCookies('id')}/articles`)
        }
      })
    }
  }
}
</script>
