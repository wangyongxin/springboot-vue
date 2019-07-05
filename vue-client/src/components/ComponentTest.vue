<template>
    <div id="app1">
        <my-component class="baz boo"></my-component>
        <my-component class="baz boo"></my-component>
        <my-component v-bind:class="{ active: isActive }"></my-component>
    </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('my-component', {
        template: '<p class="foo bar">Hi</p>'
    })
    export default {
        name: "ComponentTest",
        data(){
            return {
                isActive:true
            }
        }
    }
</script>

<style scoped>

</style>
