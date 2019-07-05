<template>
    <div id="app">
        <p>{{ foo }}</p>
        <!-- this will no longer update `foo`! -->
        <button v-on:click="changeit">Change it</button>
        <button v-on:click="foo = 'baz'">Change it2</button>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
    import Vue from 'vue'

    //Object.freeze()  阻止存在的属性被改变

    var obj = {
        foo: 'bar'
    }

    // Object.freeze(obj)

    // new Vue({
    //     el: '#app',
    //     data: obj
    // })

    export default {
        name: "DataMethods",
        data(){
            return obj
        },
        methods:{
            changeit:function(){
                this.$data.foo = 'baz'
            }
        }
    }


    var data = {a: 1}

    var vm = new Vue({
        el: '#app',
        data: data,
        //生命循环钩子
        created: function () {
            // `this` points to the vm instance
            console.log('a is: ' + this.a)
        },
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
                //视图渲染后执行
                console.log('#app is mounted')
            })
        },
        updated: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been re-rendered
                //视图重新渲染后执行
                console.log('#app is updated')
            })
        }
    })

    console.log(vm.$data === data)
    console.log(vm.$el === document.getElementById('app'))
    //监控属性变化的方法
    vm.$watch('a', function(newValue, oldValue){
        // This callback will be called when `vm.a` changes
        console.log("newValue:" + newValue + " , oldValue:" + oldValue)
    })

    console.log(vm.a === data.a)

    vm.a = 2

    console.log(data.a)

    data.a = 3

    console.log(vm.a)

    //只能修改已绑定vue初始化的值
    vm.b = 'hi' //不会触发视图更新
    console.log(data.b) // undefined

    //设置初始值 demo

    var data2 = {
        data: {
            newTodoText: '',
            visitCount: 0,
            hideCompletedTodos: false,
            todos: [],
            error: null
        }
    }



</script>

<style scoped>

</style>
