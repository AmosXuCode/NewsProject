<template>
  <div class="news-detail py15">
    <BlueBtn
    :link="{name:'NewsList'}">
      回到列表頁
    </BlueBtn>
    <div v-if="article" class="mt15">
      <div class="detail-image">
        <img v-if="article.urlToImage" :src="article.urlToImage" alt="">
        <img v-else alt="Vue logo" src="@/assets/logo.png">
      </div>
      <div class="detail-content">
        <div class="mt15">
          <span v-if="article.author" class="author">{{article.author}}</span>
          <span v-else class="author">無作者</span>
          <span class="time ml15">{{article.publishedAt}}</span>
        </div>
        <h3>{{article.title}}</h3>
        <p v-html="article.content" />
        <p>source: {{article.source.name}}</p>
        <a :href="article.url">{{article.url}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NewsDetail',
  data() {
    return {
      test: null,
      order: null,
    };
  },
  computed: {
    ...mapGetters({
      getNewsData: 'news/getNewsData',
    }),
    article() {
      return this.getNewsData.articles[this.order];
    },
  },
  created() {
    const { order } = this.$route.query;
    if (order || order === 0) {
      this.order = order;
    }
    if (!this.getNewsData.articles.length) {
      this.$router.push({ name: 'NewsList' });
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

a {
  display: inline-block;
  width: 100%;
  white-space: pre-wrap;
  text-overflow: ellipsis;
}

.news-detail {
  position: relative;
  .list-image {
    overflow: hidden;
  }
  .author {
    display: inline-block;
    padding: 5px 15px;
    background: #1E4CC4;
    color: white;
    border-radius: 9999px;
  }

  .read-more {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }

  h3 {
    font-size: 22px;
  }
  p {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>
