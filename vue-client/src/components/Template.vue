<template>
    <div id="app">
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
</template>

<script>
    export default {
        name: "Template",
        data(){
            return {
                rawHtml: "<p style='color: red;'>this p should be red</p>"
            }
        }
    }
</script>

<style scoped>

</style>
