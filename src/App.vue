<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    appHeader: Header
  }
}
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  background-color: #271b68;
}

#app {
  text-align: center;
}
</style>
