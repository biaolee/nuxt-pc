<template>
<div class="blb-error">
  <div class="blb-error-cont">
    <i class="el-icon-warning"></i>
    <div>404,你那要访问的页面不存在</div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" scoped>
.blb-error{
  position: relative;
  min-height: 100vh;
  &-cont{
    color: black;
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    width: 200px;
    margin-top: -50px;
    margin-left: -100px;
    font-family: cursive;
    i{
      padding-bottom: 16px;
      font-size: 48px;
    }

  }
  
}
</style>



