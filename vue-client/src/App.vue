<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{currentRoute}}</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      currentRoute: window.location.pathname
    }
  }
}


// new Vue({
//   el: '#currentRoute',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes.filter(path = this.currentRoute).component || NotFound
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
