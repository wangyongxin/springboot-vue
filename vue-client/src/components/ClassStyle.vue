<template>
    <div>
        <div v-bind:class="{ active: isActive }">123</div>
        <div class="static"
                v-bind:class="{ active: isActive, 'text-danger': hasError }"
        >456</div>
        <div v-bind:class="classObject">789</div>
        <div v-bind:class="[activeClass, errorClass]">012</div>
        <div v-bind:class="[isActive ? activeClass : '', errorClass]">345</div>
        <div v-bind:class="[{ active: isActive }, errorClass]">678</div>

        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">901</div>
        <div v-bind:style="styleObject">234</div>
        <div v-bind:style="[baseStyles, overridingStyles]">567</div>
        <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">890</div>
    </div>
</template>

<script>
    export default {
        name: "ClassStyle",
        data(){
            return {
                isActive:true,
                hasError:true,
                /*classObject: {
                    active: true,
                    'text-danger': false
                },*/
                error:{
                    type:"fatal"
                },
                activeClass: 'active',
                errorClass: 'text-danger',
                activeColor:"red",
                fontSize:12,
                styleObject:{
                    color: 'red',
                    fontSize: '13px'
                },
                baseStyles:{
                    color: 'red',
                    fontSize: '13px'
                },
                overridingStyles:{
                    color: 'green',
                    transform:'rotate(7deg)',
                    // '-ms-transform':'rotate(7deg)', 	/* IE 9 */
                    // '-moz-transform':'rotate(7deg)', 	/* Firefox */
                    // '-webkit-transform':'rotate(7deg)', /* Safari 和 Chrome */
                    // '-o-transform':'rotate(7deg)' 	/* Opera */
                }
            }
        },
        computed: {
            classObject: function () {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            }
        }
    }
</script>

<style scoped>

</style>
