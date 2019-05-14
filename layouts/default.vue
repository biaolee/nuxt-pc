<template>
  <div id="app" v-cloak>
    <nuxt />
  </div>
</template>

<script>
  export default {
    components: {
    }
  };
</script>
<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;

    &[v-cloak] {
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }

  /* 上面是为了保证滑动的时候不出现抖动情况 */
  .child-view {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    background: #f4f4f4;
  }

  /* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(750/360deg, 0);
    transform: translate(750/360deg, 0);
    transition-delay: 0.5s;
    -webkit-transition-delay: 0.5s;
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-750/360degg, 0);
    transform: translate(-750/360deg, 0);
    transition-delay: 0.5s;
    -webkit-transition-delay: 0.5s;
  }

  .slide-enter-active {
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .slide-leave-active {
    -webkit-transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

</style>
