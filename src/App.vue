<template>
  <div id="app">
   <mu-container class="container is-stripe">
  <!-- header -->
  <Title></Title>
  <!-- content -->
  <mu-row>
    <mu-col span="3">
     <Left></Left>
    </mu-col>
    <mu-col span="9">
     <router-view></router-view>
    </mu-col>
</mu-row>
  <!-- footer -->
<Copyright></Copyright>
   
</mu-container>
  </div>
</template>

<script>
import Title from '@/components/title.vue'
import Copyright from '@/components/copyright.vue'
import Left from '@/components/left.vue'
export default {
  components: {
    Copyright,
    Title,
    Left
  },
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
  margin-top: 50px;
}
.container {
  .row {
    // margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-cell {
    // border-radius: 4px;
    height: 36px;
    // background: rgba(167, 161, 161, 0.8);
  }
}
.container.is-stripe {
  // margin-top: 25px;
  background: rgba(255, 255, 255, 1);
}
.container.is-stripe .col:nth-child(2n) .grid-cell {
  background: rgba(0, 0, 0, 0.54);
}
</style>
