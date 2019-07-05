<template>
    <div id="app">
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        <span v-once v-on:click="change">点击不会变化: {{ msg }}</span>
        <div v-bind:id="dynamicId">123</div>
        <button v-bind:disabled="isButtonDisabled">Button</button>
        <div>
            {{ number + 1 }}
        </div>
        <div>
            {{ ok ? 'YES' : 'NO' }}
        </div>
        <div>
            {{ message.split('').reverse().join('') }}
        </div>
        <div v-bind:id="'list-' + id">qqqq</div>
        <p v-if="seen">Now you see me</p>
        <a v-bind:href="url"> 1 ... </a><br/>
        <a v-on:click="doSomething"> 2 ... </a><br/>
        <a v-on:[eventName]="doSomething"> 3 ... </a><br/>
        <a v-bind:[bar]="value"> 4 ... </a><br/>
        <form v-on:submit.prevent="onSubmit"> 5 ... </form>
        <div>简写：</div>
        <div><a v-bind:href="url"> bind全写 </a></div>
        <div><a :href="url"> bind简写 </a></div>
        <div><a :[key]="url"> bind动态属性简写 </a></div>
        <div> <a v-on:click="doSomething"> ... </a></div>
        <div><a @click="doSomething"> ... </a></div>
        <a @[event]="doSomething"> ... </a>

    </div>
</template>

<script>
    export default {
        name: "Template",
        data(){
            return {
                rawHtml: "<p style='color: red;'>this p should be red</p>",
                msg:"abc",
                dynamicId:"qwe",
                isButtonDisabled:true,
                number:999,
                ok:false,
                message:"wangyx",
                id:"123",
                seen:true,
                url:"/#/Computed",
                eventName:"mouseover",
                bar:"asd",
                value:"dfg",
                key:"href",
                event:"mouseover"
            }
        },
        methods: {
            change : function() {
                this.$data.msg = "bcd"
                this.$data.isButtonDisabled = false
            },
            doSomething: function () {
                alert(123);
            },
            onSubmit: function () {
                alert(234);
            }
        }
    }
</script>

<style scoped>

</style>
