<template>
  <div class="pagination flex end-xs middle-xs">
    <div class="flex">
      <div class="pag-item prev" @click="pageHandler('', 'prev')">
        <i class="icon-icon_arrow" />
      </div>
      <div class="pag-item"
            :class="{active: pageNum === page}"
            v-for="(pageNum, index) in pagination"
            :key="index"
            @click="pageHandler(pageNum)"
      >
        <span>{{ pageNum }}</span>
      </div>
      <div class="pag-item next" @click="pageHandler('', 'next')">
        <i class="icon-icon_arrow" />
      </div>
    </div>
    <div class="selectPage flex middle-xs ml30">
      <span class="mr15">前往頁面</span>
      <select @change="pageHandler(pageNum)" v-model="pageNum" >
        <option
          :value="pageNum"
          v-for="pageNum in pageTotal"
          :key="pageNum"
        >
          {{ pageNum }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: Number(this.page),
    };
  },
  props: {
    page: {
      type: [Number, String],
      requrie: true,
      default: 0,
    },
    size: {
      type: [Number, String],
      requrie: true,
      default: 0,
    },
    total: {
      type: [Number, String],
      requrie: true,
      default: 0,
    },
  },
  computed: {
    pagination() {
      const ptotal = Number(this.total);
      const perPage = Number(this.size);
      // page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
      // 這邊要注意，因為有可能會出現餘數，所以要無條件進位。
      const pageTotal = Math.ceil(ptotal / perPage);
      // 多分頁邏輯
      function pag(page, total, show) {
        const arr = [page];
        for (let i = 1; i <= show; i += 1) {
          if (page - i > 1) {
            arr.unshift((page - i));
          }
          if (page + i < total) {
            arr.push((page + i));
          }
        }
        if (page - (show + 1) > 1) {
          arr.unshift('...');
        }
        if (page > 1) {
          arr.unshift(1);
        }
        if (page + show + 1 < total) {
          arr.push('...');
        }
        if (page < total) {
          arr.push(total);
        }
        return arr;
      }
      const arr = pag(Number(this.page), pageTotal, 2);
      return arr;
    },
    pageTotal() {
      // const { total } = this;
      const perPage = Number(this.size);
      // page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
      // 這邊要注意，因為有可能會出現餘數，所以要無條件進位。
      const pageTotal = Math.ceil(Number(this.total) / perPage);
      return pageTotal;
    },
  },
  methods: {
    // 分頁操控的function
    pageHandler(pageNum, type = '') {
      if (pageNum === '...') return;
      const currentPage = Number(this.page);
      if (!type && pageNum) {
        this.$emit('goPageTo', pageNum);
      } else if (type === 'prev') {
        // 上一頁
        const prevPage = currentPage - 1;
        if (prevPage >= 1) {
          this.$emit('goPageTo', prevPage);
        }
      } else if (type === 'next') {
        // 下一頁
        const nextPage = currentPage + 1;
        if (this.pageTotal >= nextPage) {
          this.$emit('goPageTo', nextPage);
        }
      }
    },
  },
  watch: {
    page(newVal) {
      this.pageNum = Number(newVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  @media (max-width: 576px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
  .pag-item {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    margin:0 5px;
    border-radius: 50%;
    color: #959595;

    @media (max-width: 576px) {
      margin:0 3px;
    }

    &.active{
      background: #1E4CC4;
      color: #fff;
    }

    i{
      font-size: 10px;
    }

    &.prev,
    &.next {
      transform: scale(0.9);
    }

    &.prev{
      transform: rotate(180deg) scale(0.9);
    }
  }

  .selectPage {
    @media (max-width: 576px) {
      margin:15px 0;
    }

    select {
      border: 1px solid #CCCCCC;
      padding: 5px 10px;
      border-radius: 5px;
    }

  }
}
</style>
