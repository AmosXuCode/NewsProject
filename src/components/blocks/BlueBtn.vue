<template>
  <component
    :is="compontentType"
    :type="!link ? type : false"
    :to="redirectionLink"
    class="blue-btn pointer"
    :class="{ 'no-underline pointer align-center border-box': link,
              'disabled': disabled,
              'button-disabled': disabled ,
              'mini-btn': size === 'mini'
    }"
    :disabled="disabled"
  >
    <slot>
      Button
    </slot>
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    link: {
      type: Object,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    compontentType() {
      return this.link ? 'router-link' : 'button';
    },
    redirectionLink() {
      return this.link ? this.link : null;
    },
  },

};
</script>

<style lang="scss" scoped>
.blue-btn {
  background-color: #1E4CC4;
  border-radius: 999px;
  position: relative;
  max-width: 120px;
  max-height: 40px;
  border: none;
  outline: none;
  color: #fff;
  padding: 5px 10px;
}

a {
  text-decoration: none;
}
</style>
