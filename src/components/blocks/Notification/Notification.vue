<template>
<div :class="['notification', notification.status]">
  <div class="content">
    <div class="img-wrap">
      <img v-if="notification.type === 'error'" src="@/assets/icon_alert.png" alt="" />
    </div>
    <div class="message">{{ notification.text }}</div>
    <div class="common-buttons flex center-xs">
      <BlueBtn v-if="notification.confirmText"
        class="pointer"
        @click.native="notification.confirmCallback">
        {{notification.confirmText}}
      </BlueBtn>
      <BlueBtn v-if="notification.cancelText"
        class="pointer"
        @click.native="notification.cancelCallback">
        {{notification.cancelText}}
      </BlueBtn>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Notification',
  computed: {
    notification() {
      return this.$store.state.notification.notification;
    },
  },
};
</script>

<style scoped lang="scss">
.notification {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0;
  z-index: 99999;
  visibility: hidden;
  img {
    width: 100%;
    max-width: 100px;
  }

  &.active{
    opacity: 1;
    visibility: visible;
  }

  .content {
    margin: 0 auto;
    max-width: 350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #00000029;
    padding: 30px;
  }

  .img-wrap {
    text-align: center;
  }

  .message {
    text-align: center;
    font-size: 18px;
    padding: 30px 0;
  }
}

</style>
