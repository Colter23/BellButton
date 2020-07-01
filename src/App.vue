<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
  </div>
</template>

<script>
  import MainNavBar from "./views/MainNavBar";
  export default {
    components: {MainNavBar}
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

@import "assets/css/base.css";
</style>
