<template>
  <div id="app">
    <base-checkbox v-model="lovingVue"></base-checkbox>
    <div>{{lovingVue}}</div>
    <div>//template 根元素 是 input ,base-input2 自定义组件可监听 根input 所有 事件</div>
    <base-input2 v-on:focus.native="onFocus"></base-input2>
    <div>//template 根元素 不是 input , 是label 标签，base-input 自定义组件可监听 根input 所有 事件</div>
    <base-input v-on:focus="onFocus"></base-input>
    <div @click="onClick">测试双向绑定-属性绑定</div>
    <text-document v-bind:title.sync="doc.title"></text-document>
    <div @click="onClick2">测试双向绑定2-对象绑定</div>
    <text-document2 v-bind.sync="doc"></text-document2>
  </div>
</template>

<script>
    import Vue from "vue";


    Vue.component('text-document2', {
        created:function(){
            console.log("开始创建text-document2");
        },
        props: {
            title: String,
            name: String
        },
        // v-on:change="changeDoc"
        template: `
    <input
      type="text"
      v-bind:value="title"
      v-on:change="changeDoc"
    >
  `,
        methods:{
            changeDoc:function(event){
              this.$emit('update:title', event.target.value)
              this.$emit('update:name', 'name'+event.target.value)
            }
        }
    })

    Vue.component('text-document', {
        props: {
            title: String
        },
        template: `
    <input
      type="text"
      v-bind:value="title"
      v-on:change="$emit('update:title', $event.target.value)"
    >
  `
    })



    Vue.component('base-checkbox', {
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        },
        template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
    })

  //template 根元素 是 input
    Vue.component('base-input2', {
        inheritAttrs: false,
        props: ['label', 'value'],
        template: `
      <input
        v-bind="$attrs"
        v-bind:value="value"
      >
  `
    })

    Vue.component('base-input', {
        inheritAttrs: false,
        props: ['label', 'value'],
        computed: {
            inputListeners: function () {
                var vm = this
                // `Object.assign` merges objects together to form a new object
                return Object.assign({},
                    // We add all the listeners from the parent
                    this.$listeners,
                    // Then we can add custom listeners or override the
                    // behavior of some listeners.
                    {
                        // This ensures that the component works with v-model
                        input: function (event) {
                            vm.$emit('input', event.target.value)
                            console.log('input', event.target.value);
                        },
                        focus: function (event) {
                            vm.$emit('focus', event.target.value)
                            console.log('focus', event.target.value);
                        }
                    }
                )
            }
        },
        template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
    })
    export default {
        name: "CustomComponent",
        data(){
            return {
                lovingVue: true,
                label: "test",
                doc:{
                    title:"wangyx",
                    name:"123"
                },
                doc2:"wangyx2"
            }
        },
        methods:{
            onFocus:function(e){
                console.log("onFocus", e);
            },
            onInput:function(e){
                console.log("onInput", e);
            },
            onClick:function(e){
                console.log("doc.title:" + this.$data.doc.title);
            },
            onClick2:function(e){
                console.log("doc:", this.$data.doc);
            }
        }
    }
</script>

<style scoped>

</style>
