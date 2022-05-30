<template>
  <div class="section-news">
    <div class="wrapper">
      <div class="news-action">
        <modal-news />
      </div>
      <v-card class="list-news">
        <v-list-item v-for="post in posts" class="item-news" :key="post.id">
          <v-list-item-content class="item-content">
            <v-list-item-title tag="h2" class="title">{{ post.title }}</v-list-item-title>
            <div class="subtitle-1">{{ post.content }}</div>
          </v-list-item-content>
          <v-list-item-action class="item-actions">
            <modal-news :idPost="post.id" :dataPost="post"/>
            <v-btn
              color="#ff0000"
              depressed
              elevation="3"
              class="white--text"
              @click="DELETE_POST(post.id)"
            >Delete</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import ModalNews from '@/components/modals/ModalNews.vue'


export default {
  name: 'News',
  components: {
    'modal-news': ModalNews
  },

  created() {
    this.getPost();
  },

  computed: {
    ...mapGetters(['posts']),
  },

  methods: {
    ...mapActions(['getPost']),
    ...mapMutations(['DELETE_POST']),
  }
}
</script>
<style lang="sass" scoped>
.wrapper
  margin: 0 auto
  width: 768px
  max-width: 100%

.section-news
  padding: 100px 0
.list-news
  text-align: left
  padding: 0
  margin: 0
.item-news
  padding: 10px 10px
  border-bottom: 1px solid #eee
  display: flex
  align-items: center
  .item-actions
    flex-shrink: 0
    flex-direction: row
    align-items: center
    button
      margin-left: 10px
  .item-content
    width: 100%
.news-action
  text-align: right
  margin-bottom: 20px
</style>
