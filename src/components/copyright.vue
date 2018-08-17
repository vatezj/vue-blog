<template>

  <mu-row class="footer">
    <mu-col span="12">
      <div class="grid-cell">
        粤ICP备16067937号-2&copy;JvateHu -<a href="https://github.com/vatezj" target="_blank">https://github.com/vatezj</a> - Powered by swoft.
      </div>
    </mu-col>
  </mu-row>

</template>
<script>

export default {
  name: "copyright",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.footer{
  text-align: center;
  margin-top: 20px;
}
</style>