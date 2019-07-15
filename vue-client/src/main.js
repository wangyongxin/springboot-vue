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

//全局注册组件
// import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
//在 根Vue初始化之前 注册

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


