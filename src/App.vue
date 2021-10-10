<template>
  <div id="app">
    <div id="viewport">
      <header></header>
      <router-view class="container"/>
      <footer></footer>
    </div>
    <Loading />
    <Notification />
  </div>
</template>

<script>
import Loading from '@/components/blocks/Loading.vue';
import Notification from '@/components/blocks/Notification/Notification.vue';

export default {
  components: {
    Loading,
    Notification,
  },
};
</script>

<style lang="scss">
@import 'assets/scss/main.scss'
</style>
