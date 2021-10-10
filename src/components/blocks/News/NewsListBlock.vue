<template>
    <div class="list-block flex p15 row">
        <div class="list-image col-xs-12 col-md-6 col-lg-4">
          <router-link
          :to="{name:'NewsDetail', query: { page: currentInfo.page, order: currentInfo.index} }"
          >
            <img v-if="article.urlToImage" loading="lazy" :src="article.urlToImage" alt="">
            <img v-else alt="Vue logo" loading="lazy" src="@/assets/logo.png">
          </router-link>
        </div>
      <div class="list-content pl15 col-xs-12 col-md-6 col-lg-8">
        <div class="mt15">
          <span v-if="article.author" class="author">{{article.author}}</span>
          <span v-else class="author">無作者</span>
          <span class="time ml15">{{article.publishedAt}}</span>
        </div>
        <router-link
          :to="{name:'NewsDetail', query: { page: currentInfo.page, order: currentInfo.index} }"
          >
            <h3 class="my15">{{article.title}}</h3>
        </router-link>
        <p v-html="article.description" />
        <BlueBtn class="read-more hidden-xs hidden-sm hidden-md"
        :link="{name:'NewsDetail', query: { page: currentInfo.page, order: currentInfo.index} }">
          查看更多
        </BlueBtn>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      require: true,
    },
    currentInfo: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: black;
  }

.list-block {
  border-bottom: 1px solid #1E4CC4;
  position: relative;
  .list-image {
    overflow: hidden;
    img{
      // width: ;
      transition: all 0.3s ease-in-out;
    }
  }
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
    h3 {
      color: #1E4CC4;
    }
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
    margin-bottom: 45px;
  }
}
</style>
