<template>
 <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="FontPage(pages.current_page)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="item in pages.total_pages" :key="item">
        <a class="page-link" :class="{active:item==pages.current_page}" href="#" @click.prevent="updatePage(item)">{{item}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="NextPage(pages.current_page)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  data () {
    return {
      page: 0
    }
  },
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('changePage', page)
    },
    NextPage (page) {
      this.$emit('changePage', page + 1)
    },
    FontPage (page) {
      this.$emit('changePage', page - 1)
    }
  }
}
</script>
