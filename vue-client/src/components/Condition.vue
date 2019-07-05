<template>
    <div id="app">
        <h1 v-if="ok">ok!</h1>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
        <div v-if="Math.random() > 0.5">
            Now you see me
        </div>
        <div v-else>
            Now you don't
        </div>

        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>

<!--     key 防止 输入内容不被擦除   -->
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input">
        </template>

        <h1 v-show="ok">Hello!</h1>
    </div>
</template>

<script>
    export default {
        name: "Condition",
        data(){
            return {
                ok: true,
                awesome: false,
                type:'BA',
                loginType:"email"
            }
        }
    }
</script>

<style scoped>

</style>
