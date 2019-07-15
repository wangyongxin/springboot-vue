<template>
  <div id="components-demo">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>

    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    ></blog-post>

    <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post2
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:enlarge-text="postFontSize += 0.1"
      v-on:enlarge-text2="postFontSize += $event"
      v-on:enlarge-text3="onEnlargeText"
    ></blog-post2>
    </div>

    <custom-input
      v-bind:value="searchText"
      v-on:input="searchText = $event"
    ></custom-input>
    <div>{{searchText}}</div>
    等价于
    <custom-input v-model="searchText"></custom-input>

    <alert-box>
      Something bad happened.
    </alert-box>
    <ComponentTest></ComponentTest>
  </div>
</template>

<script>
    // Define a new component called button-counter
    import Vue from "vue";

    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })
    Vue.component('blog-post', {
        props: ['title'],
        template: '<h3>{{ title }}</h3>'
    })

    Vue.component('blog-post2', {
        props: ['post'],
        template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <button v-on:click="$emit('enlarge-text2', -0.1)">
        Enlarge text2
      </button>
      <button v-on:click="$emit('enlarge-text3', 0.1)">
        Enlarge text3
      </button>
      <div v-html="post.content"></div>
    </div>
  `
    })


    // <input v-model="searchText">
    //
    //     <input
    // v-bind:value="searchText"
    // v-on:input="searchText = $event.target.value"
    //     >
    Vue.component('custom-input', {
        props: ['value'],
        template: `<div>model等同方式互传value
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    ></div>
  `
    })

    Vue.component('alert-box', {
        template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
<!--      <slot></slot>-->
    </div>
  `
    })

    import ComponentTest from "./ComponentTest";
    export default {
        name: "ComponentDemo",
        components:{"ComponentTest":ComponentTest},
        data(){
            return {
                posts: [
                    { id: 1, title: 'My journey with Vue' ,content:`wadsjalsd
                    asdasfasdf
                    adfadsfs`},//IE 不支持 content这种写法
                    { id: 2, title: 'Blogging with Vue' ,content:"asdasda" +
                            "sdfsdfsdf" +
                            "adfadfa"},
                    { id: 3, title: 'Why Vue is so fun' ,content:"asafadadf\
                    asfadfadfadfa\
                    qfewfeqrqwr"}//支持IE
                ],
                postFontSize: 1,
                searchText:''
            }
        },
        methods:{
            onEnlargeText: function(enlargeAmount){
                this.postFontSize += enlargeAmount
            }
        }
    }
</script>

<style scoped>

</style>
