<template>
    <div id="app">
        <div>{{ message.split('').reverse().join('') }}</div>
        <div id="example">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
        <div id="watch_demo" @click="rename">{{ fullName }}</div>
        <div id="watch-example">
            <p>
                Ask a yes/no question:
                <input v-model="question">
            </p>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Computed",
        data(){
            return {
                message:"wangyx",
                firstName: 'Foo',
                lastName: 'Bar',
                // fullName: 'Foo Bar'
                question: '',
                answer: 'I cannot give you an answer until you ask a question!'
            }
        },
        computed:{
            reversedMessage:function(){
                return this.message.split('').reverse().join('')
            },
            now: function () {
                //不会更新,计算属性只有依赖的属性改变才会重新计算
                return Date.now()
            },
            // fullName: function () {
            //     return this.firstName + ' ' + this.lastName
            // }
            fullName: {
                // getter
                get: function () {
                    return this.firstName + ' ' + this.lastName
                },
                // setter
                set: function (newValue) {
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length - 1]
                }
            }
        },
        watch: {
            // firstName: function (val) {
            //     this.fullName = val + ' ' + this.lastName
            // },
            // lastName: function (val) {
            //     this.fullName = this.firstName + ' ' + val
            // }
            // whenever question changes, this function will run
            question: function (newQuestion, oldQuestion) {
                this.answer = 'Waiting for you to stop typing...'
                this.debouncedGetAnswer()
            }
        },
        methods:{
            rename:function(){
                this.fullName = 'John Doe'
            },
            getAnswer: function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            }
        },
        created: function () {
            // _.debounce is a function provided by lodash to limit how
            // often a particularly expensive operation can be run.
            // In this case, we want to limit how often we access
            // yesno.wtf/api, waiting until the user has completely
            // finished typing before making the ajax request. To learn
            // more about the _.debounce function (and its cousin
            // _.throttle), visit: https://lodash.com/docs#debounce
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        }
    }
</script>

<style scoped>

</style>
