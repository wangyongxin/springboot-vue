<template>
    <div>
        <div id="app-1">
            {{ message }}
        </div>
        <div id="app-2">
          <span v-bind:title="message">
            Hover your mouse over me for a few seconds
            to see my dynamically bound title!
          </span>
        </div>
        <div id="app-3">
            <span v-if="seen">Now you see me</span>
        </div>
        <div id="app-4" v-on:click="addElement">
            <ol>
                <li v-for="todo in todos">
                    {{ todo.text }}
                </li>
            </ol>
        </div>
        <div id="app-5">
            <p>{{ message2 }}</p>
            <button v-on:click="reverseMessage">Reverse Message</button>
        </div>
        <div id="app-6">
            <p>{{ message3 }}</p>
            <input v-model="message3">
        </div>
        <ol>
            <!-- Create an instance of the todo-item component -->
            <todo-item></todo-item>
        </ol>
        <div id="app-7">
            <ol>
                <!--
                  Now we provide each todo-item with the todo object
                  it's representing, so that its content can be dynamic.
                  We also need to provide each component with a "key",
                  which will be explained later.
                -->
                <todo-item2
                        v-for="item in groceryList"
                        v-bind:todo="item"
                        v-bind:key="item.id"
                ></todo-item2>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                message: 'You loaded this page on ' + new Date().toLocaleString(),
                seen: true,
                todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' }
                ],
                message2: 'Hello Vue.js!',
                message3: 'Hello Vue!',
                groceryList: [
                    { id: 0, text: 'Vegetables' },
                    { id: 1, text: 'Cheese' },
                    { id: 2, text: 'Whatever else humans are supposed to eat' }
                ]
            }
        },
        methods: {
            addElement : function() {
                this.$data.todos.push({ text: 'New item' })
            },
            reverseMessage: function () {
                this.message2 = this.message2.split('').reverse().join('')
            }
        }
    }

</script>

<style scoped>

</style>
