<template>
    <div id="app">
        <ul id="example-1">
            <li v-for="item in items">
                {{ item.message }}
            </li>
        </ul>
        <ul id="example-2">
            <li v-for="(item, index) in items">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </ul>
        <div v-for="item of items">
            {{item}}
        </div>

        <ul id="v-for-object" class="demo">
            <li v-for="value in object">
                {{ value }}
            </li>
        </ul>

        <div v-for="(value, name) in object">
            {{ name }}: {{ value }}
        </div>

        <div v-for="(value, name, index) in object">
            {{ index }}. {{ name }}: {{ value }}
        </div>

        <div v-for="item in items" v-bind:key="item.id">
            <!-- content -->
            <input v-bind:value="item.message" >
        </div>
        <input type="button" @click="changeItems" value="change">

        <li v-for="n in evenNumbers">{{ n }}</li>

        <li v-for="n in even(numbers2)">{{ n }}</li>

        <div>
            <span v-for="n in 10">{{ n }} </span>
        </div>

        <ul>
            <template v-for="item in items3">
                <li>{{ item.msg }}</li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>

        <li v-for="todo in todos" v-if="!todo.isComplete">
           todo- {{ todo }}
        </li>

        <ul v-if="todos.length">
            <li v-for="todo in todos">
                {{ todo }}
            </li>
        </ul>
        <p v-else>No todos left!</p>

        <my-component v-for="item in items4" :key="item.id"></my-component>

        <My2Component
                v-for="(item, index) in items6"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="item.id"
                v-bind:items6="items6"
        ></My2Component>



        <div id="todo-list-example">
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Add a todo</label>
                <input
                        v-model="newTodoText"
                        id="new-todo"
                        placeholder="E.g. Feed the cat"
                >
                <button>Add</button>
            </form>
            <ul>
                <li
                        is="todo-item3"
                        v-for="(todo, index) in todos2"
                        v-bind:key="todo.id"
                        v-bind:title="todo.title"
                        v-on:remove="todos2.splice(index, 1)"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('todo-item3', {
        template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
        props: ['title']
    })
    export default {
        name: "List",
        data(){
            return {
                items:[{message:"1",id:1},{message:"5",id:5},{message:"2",id:2}],
                parentMessage:"parentMessage",
                object: {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                },
                items2: ['a', 'b', 'c'],
                userProfile: {
                    name: 'Anika'
                },
                numbers: [ 1, 2, 3, 4, 5 ],
                numbers2: [ 1, 2, 3, 4, 5 ],
                items3:[{msg:"1",id:1},{msg:"5",id:5},{msg:"2",id:2}],
                todos:[{isComplete:true},{isComplete:false},{isComplete:true},{isComplete:false},],
                items4:[{message:"1",id:11},{message:"5",id:55},{message:"2",id:22}],
                items5:[{message:"1",id:111,title:"aaa"},{message:"5",id:555,title:"bbb"},{message:"2",id:222,title:"ccc"}],
                newTodoText:"gogo",
                items6:[{id:12,title:"111",todo:"11ok"},{id:13,title:"222",todo:"22ok"},{id:14,title:"333",todo:"33ok"}],
                newTodoText: '',
                todos2: [
                    {
                        id: 1,
                        title: 'Do the dishes',
                    },
                    {
                        id: 2,
                        title: 'Take out the trash',
                    },
                    {
                        id: 3,
                        title: 'Mow the lawn'
                    }
                ],
                nextTodoId: 4
            }
        },
        computed: {
            evenNumbers: function () {
                return this.numbers.filter(function (number) {
                    return number % 2 === 0
                })
            }
        },
        methods:{
            addNewTodo: function () {
                this.todos2.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            },
            even: function (numbers) {
                return numbers.filter(function (number) {
                    return number % 2 === 0
                })
            },
            changeItems:function(){
                // var a = this.$data.items.pop();
                // var b = this.$data.items.pop();
                // this.$data.items.push(a);
                // this.$data.items.push(b);
                // console.log(a);
                // console.log(b);
                // var a = this.$data.items.shift();
                // console.log(a);
                // this.$data.items.unshift(a);
                // console.log(a);
                // this.$data.items.push(a);
                // this.$data.items.splice(0,1,{message:3,id:3});
                // console.log(this.$data.items.sort());
                // console.log(this.$data.items.reverse());
                // this.$data.items = this.$data.items.filter(function(item){
                //     return item.message.match(/1/)
                // })

                // Vue.set(this.$data.items, 1, {message:"3",id:3})
                // this.$set(this.$data.items, 1, {message:"3",id:3})
                //添加新的反应属性
                // Vue.set(this.$data.userProfile, "age", 27)
                // this.$set(this.$data.userProfile, "age", 27)

                // Object.assign(this.$data.userProfile, {
                //     age: 27,
                //     favoriteColor: 'Vue Green'
                // })

                this.$data.userProfile = Object.assign({}, this.$data.userProfile, {
                    age: 27,
                    favoriteColor: 'Vue Green'
                })
                console.log(this.$data.userProfile);
            }
        }
    }
</script>

<style scoped>

</style>
