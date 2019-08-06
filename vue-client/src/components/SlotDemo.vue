<template>
  <div id="app">
    <div>
      <navigation-link url="/profile">
        Your Profile
      </navigation-link>
    </div>
  <div>
    <navigation-link url="/profile">
      <span class="fa fa-user"></span>
      Your Profile
    </navigation-link>
  </div>

    <div>
      <navigation-link url="/profile">
        <!-- Use a component to add an icon -->
        <font-awesome-icon name="user"></font-awesome-icon>
        Your Profile
        <div>
<!--        Clicking here will send you to: {{ url }}-->
        </div>
      </navigation-link>
    </div>
    <div>
      <navigation-link url="/profile">
      </navigation-link>
    </div>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <current-user v-bind:user="user">
      {{ user.firstName }}
    </current-user>

    <div><hr/></div>
    <current-user v-bind:user="user">
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </current-user>
    <div> <hr/></div>

    <current-user v-bind:user="user" v-slot:default="slotProps">
      {{ slotProps.user.firstName }}
    </current-user>
    <div> <hr/></div>

    <current-user v-bind:user="user"  v-slot="slotProps">
      {{ slotProps.user.firstName }}
    </current-user>
    <div> <hr/> 更整洁</div>
    <current-user v-bind:user="user"  v-slot="{ user }">
      {{ user.firstName }}
    </current-user>
    <div> <hr/> 别名</div>
    <current-user2 v-slot="{ user: person }">
      {{ person.firstName }}
    </current-user2>

    <div> <hr/> fallback 测试失败</div>
   <!-- <current-user3 v-slot='{ user = { firstName: "yongxin5" } }'>
      {{ user.firstName }}
    </current-user3>-->
    <div> <hr/> 动态</div>
    <base-layout2>
      <template>
        ...2
      </template>
      <template v-slot:[dynamicSlotName]>
        ...1
      </template>
    </base-layout2>

    <base-layout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <!-- This will trigger a warning -->
    <current-user2 #default="{ user }">
      {{ user.firstName }}
    </current-user2>

    <todo-list v-bind:todos="todos">
      <template v-slot:todo="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </todo-list>
  </div>
</template>

<script>
    import Vue from "vue";


    Vue.component('todo-list', {
        created:function(){
            console.log("开始创建todo-list");
        },
        props: ["todos"],
        data(){
          return {
            filteredTodos:this.$props.todos
          }
        },
        filter:{

        },
        template: `
          <ul>
              <li
                v-for="todo in filteredTodos"
                v-bind:key="todo.id"
              >
              <slot name="todo" v-bind:todo="todo">
              {{todo.text}}
              </slot>
              </li>
          </ul>
        `
    })
    Vue.component('current-user3', {
        created:function(){
            console.log("开始创建current-user2");
        },
        props: {
        },
        data(){
          return {
              user1:{
                lastName: "wang4",
                firstName:"yongxin4"
            }
          }
        },
        template: `
          <span>
            <slot v-bind:user="user1">{{ user1.lastName }}</slot>
          </span>
        `
    })
    Vue.component('current-user2', {
        created:function(){
            console.log("开始创建current-user2");
        },
        props: {
        },
        data(){
          return {
              user:{
                firstName: "yongxin3",
                lastName: "wang3"
            }
          }
        },
        template: `
          <span>
            <slot v-bind:user="user">{{ user.lastName }}</slot>
          </span>
        `
    })
    Vue.component('current-user', {
        created:function(){
            console.log("开始创建current-user");
        },
        props: {
            user:Object
        },
        data(){
          return {
              user2:{
                firstName: "yongxin3",
                lastName: "wang3"
            }
          }
        },
        template: `
          <span>
            <slot v-bind:user="user">{{ user.lastName }}</slot>
          </span>
        `
    })
    Vue.component('base-layout', {
        created:function(){
            console.log("开始创建base-layout");
        },
        props: {
        },
        template: `
          <div class="container">
            <header>
              <slot name="header"></slot>
            </header>
            <main>
              <slot></slot>
            </main>
            <footer>
              <slot name="footer"></slot>
            </footer>
          </div>
        `
    })
    Vue.component('base-layout2', {
        created:function(){
            console.log("开始创建base-layout2");
        },
        props: {
        },
        data(){
          return {
            // dynamicSlotName: "header"
          }
        },
        template: `
          <div class="container">
            <header>
              <slot name="header"></slot>
            </header>
            <main>
              <slot></slot>
            </main>
          </div>
        `
    })
    Vue.component('navigation-link', {
        created:function(){
            console.log("开始创建navigation-link");
        },
        props: {
            url: String,
        },
        template: `
          <a v-bind:href="url" class="nav-link">
            <slot>FallbackText</slot>
          </a>
        `
    })
    Vue.component('font-awesome-icon', {
        created:function(){
            console.log("开始创建font-awesome-icon");
        },
        props: {
        },
        template: `
          <span v-bind="$attrs">图标</span>
        `
    })
    export default {
        name: "SlotDemo",
        data(){
            return {
                url2: "SlotDemo",
                user: {
                    firstName: "yongxin2",
                    lastName: "wang2"
                },
              dynamicSlotName:"header",
              todos:[
                {
                  isComplete:true,
                  text:"asd"
                },
                {
                  isComplete:false,
                  text:"3443"
                }
              ]

            }
        }
    }
</script>

<style scoped>

</style>
