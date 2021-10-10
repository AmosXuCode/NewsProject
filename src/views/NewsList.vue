<template>
  <div class="news-list">
    <div class="search-bar container py15 w-100">
      <NewsSearchBar :pass-search="search" @onSearch="routerPush" />
    </div>
    <Pagination
      v-if="totalResults"
      :page="search.page"
      :size="search.size"
      :total="100"
      @goPageTo="changePageTo"
    />
    <div v-if="articles.length">
      <p>search for: {{ search.q }}</p>
      <template v-for="(article, index) in articles">
        <NewsListBlock :article="article" :currentInfo="{page: search.page, index}" :key="index"/>
      </template>
    </div>
    <div v-else class="no-news">
      <p>搜尋空空如也，去查個東西吧!</p>
    </div>
    <Pagination
      class="py15"
      v-if="totalResults"
      :page="search.page"
      :size="search.size"
      :total="100"
      @goPageTo="changePageTo"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import NewsListBlock from '@/components/blocks/News/NewsListBlock.vue';
import NewsSearchBar from '@/components/blocks/News/NewsSearchBar.vue';
import Pagination from '@/components/blocks/Pagination.vue';

export default {
  name: 'NewsLists',
  data() {
    return {
      search: {
        q: 'COVID-19',
        from: null,
        to: null,
        sortBy: 'relevancy',
        page: 1,
        size: 20,
      },
    };
  },
  components: {
    NewsSearchBar,
    NewsListBlock,
    Pagination,
  },
  computed: {
    ...mapGetters({
      getNewsData: 'news/getNewsData',
    }),
    articles() {
      return this.getNewsData.articles;
    },
    totalResults() {
      // 因為超過100個 result 就不能獲取了 所以傳入會定死在 100
      return this.getNewsData.totalResults;
    },
  },
  methods: {
    changePageTo(pageNum = 1) {
      this.search.page = Number(pageNum);
      this.routerPush();
    },
    routerPush(payload = null) {
      const query = payload || this.search;
      this.$router.push(
        {
          name: 'NewsList',
          query,
        },
      );
    },
    checkQuery(query) {
      if (!query.q) return false;
      const obj = {
        q: query.q,
        from: query.from ? query.from : null,
        to: query.to ? query.to : null,
        sortBy: query.sortBy ? query.sortBy : null,
        page: query.page ? Number(query.page) : 1,
        size: 20,
      };
      return obj;
    },
    searchHandler(payload) {
      const query = this.checkQuery(payload);
      if (query) {
        this.search = { ...query };
        this.$store.dispatch('news/getAllNewsData', this.search);
      }
    },
  },
  watch: {
    $route(to) {
      const { query } = to;
      this.searchHandler(query);
    },
  },
  created() {
    const { query } = this.$route;
    this.searchHandler(query);
  },
};
</script>

<style lang="scss" scoped>

.news-list{
  margin-top: 125px;
  margin-bottom: 30px;
  @media (max-width: 576px) {
    margin-top:200px;
  }
}

.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0px 0px 5px #00000029;
  z-index: 999;
}

.no-news {
  font-size: 30px;
}
</style>
