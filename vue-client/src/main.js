// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//需要定义在主App模块之前，也可定义再引用的router/index.js
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

Vue.component('todo-item2', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('My2Component', {
  template:
      '        <ul>' +
      '            <li' +
      '                    is="todo-item"' +
      '                    v-for="(todo, index) in items6"' +
      '                    v-bind:key="todo.id"' +
      '                    v-bind:title="todo.title"' +
      '                    v-on:remove="items6.splice(index, 1)"' +
      '            ></li>' +
      '        </ul>',
  props: ["items6"],
  methods:{

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


