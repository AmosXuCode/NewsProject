<template>
  <div class="w-100 flex flex-column end-xs">
    <div class="row between-xs end-xs">
        <div class="flex col-xs-12 col-sm-6 middle-xs start-xs">
          <label>Search: </label>
          <input class="search-input ml10" type="search"
            v-model.trim="search.q" @keypress.enter="searchNews">
          <BlueBtn class="search-btn ml10" @click.native="searchNews">
            搜尋
          </BlueBtn>
        </div>
        <div class="flex col-xs-12 col-sm-6 middle-xs end-md">
          <label>SortBy: </label>
          <select class="ml10" v-model="search.sortBy">
            <option value="relevancy">相關度</option>
            <option value="popularity">人氣</option>
            <option value="publishedAt">發布時間</option>
          </select>
        </div>
        <div class="row ml3">
          <div class="flex col-xs-12 col-sm-6 middle-xs start-md">
            <label>From: </label>
            <input class="ml10" type="date" v-model="search.from">
          </div>
          <div class="flex col-xs-12 col-sm-6 middle-xs start-md">
            <label class="ml10">To: </label>
            <input class="ml10" type="date" v-model="search.to">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: { ...this.passSearch },
    };
  },
  props: {
    passSearch: {
      type: Object,
      require: true,
    },
  },
  methods: {
    searchNews() {
      if (!this.search.q) {
        this.$store.dispatch('notification/spawnNotification', {
          status: 'active',
          type: 'error',
          text: '請輸入文字',
          cancelText: '',
          confirmText: '確認',
          cancelCallback: '',
          confirmCallback: () => {
            this.$store.dispatch('notification/closeNotification', null);
          },
        });
        return;
      }
      this.search.page = 1;
      this.$emit('onSearch', this.search);
    },
  },
};
</script>

<style lang="scss" scoped>

select,
input {
  border: 1px solid #CCCCCC;
  padding: 5px 10px;
  border-radius: 5px;
  @media (max-width:768px) {
    flex: 1;
  }
}

.search-input {
  @media (max-width:768px) {
    flex: 1;
    max-width: 165px;
  }
}
.search-btn {
  @media (max-width:768px) {
    flex: 1;
    max-width: 100%;
  }
}

div.flex.col-xs-12{
  margin-bottom: 5px
}
</style>
