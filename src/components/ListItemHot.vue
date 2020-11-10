<template>
  <div class="hot">
    <div class="hotItem-rank">
      <span :class="index > 2 ? 'backRank': 'frontRank'">{{index + 1}}</span>
    </div>
    <div class="hotItem-content" v-if="item">
      <a :href="item.target.link.url" v-if="item.target">
        <h2 class="hotItem-title" v-if="item.target.title_area">
          {{ item.target.title_area.text }}
        </h2>
        <p class="hotItem-excerpt hotItem-excerpt-multiLine" v-if="item.target">
          {{item.target.excerpt_area.text}}
        </p>
      </a>
      <list-item-actions v-if="item.target"
        :metrics_area="item.target.metrics_area"
        class="hotItem-actions"
        :showActionItems= "['hot', 'share']"
      />
    </div>
    <a class="hotItem-img" v-if="item && item.target && item.target.image_area" href="#">
      <img :src="item.target.image_area.url" alt="">
    </a>
  </div>
</template>

<script>
import ListItemActions from '@/components/ListItemActions'

export default {
  props: ['item', 'index'],
  components: {
    ListItemActions
  }
}
</script>
