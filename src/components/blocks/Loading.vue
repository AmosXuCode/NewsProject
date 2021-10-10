<template>
  <div class="loader-container" v-if="isLoading">
    <div class="loader-inner-container">
      <div class="spinner">
        <div class="double-bounce1 w-100"/>
        <div class="double-bounce2 w-100"/>
      </div>
      <div
        class="loader-message-container mt15 py5 px15 align-center h6 cl-white"
        v-if="message"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Loading',
  data() {
    return {
      message: '搜尋中...',
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.loading.isLoading,
    }),
  },
};
</script>

<style lang="scss" scoped>

.loader-container {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
}

.loader-inner-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.loader-message-container {
  color:black;
  background-color: white;
  opacity: 0.6;
  border-radius: 50px;
  letter-spacing: 0.5px;
}

.spinner {
  position: relative;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  background: transparent;
}

.double-bounce1,
.double-bounce2 {
  position: absolute;
  height: 100%;
  opacity: 0.6;
  top: 0;
  left: 0;
  background: white;
  border-radius: 50%;
  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
