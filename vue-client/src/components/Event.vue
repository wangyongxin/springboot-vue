<template>
  <div id="app">
    <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <div id="example-2">
      <!-- `greet` is the name of a method defined below -->
      <button v-on:click="greet">Greet</button>
    </div>
    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <div id="event_modifiers">
      <!-- the click event's propagation will be stopped -->
      <a v-on:click.stop="doThis">1</a>

      <!-- the submit event will no longer reload the page -->
      <form v-on:submit.prevent="onSubmit">2</form>

      <!-- modifiers can be chained -->
      <a v-on:click.stop.prevent="doThat">3</a>

      <!-- just the modifier -->
      <form v-on:submit.prevent>4</form>

      <!-- use capture mode when adding the event listener -->
      <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
      <div v-on:click.capture="doThis">5...</div>

      <!-- only trigger handler if event.target is the element itself -->
      <!-- i.e. not from a child element -->
      <div v-on:click.self="doThat">.6..</div>

      <!-- the click event will be triggered at most once -->
      <a v-on:click.once="doThis">7</a>

      <!-- the scroll event's default behavior (scrolling) will happen -->
      <!-- immediately, instead of waiting for `onScroll` to complete  -->
      <!-- in case it contains `event.preventDefault()`                -->
      <div v-on:scroll.passive="onScroll" style="height:200px;width:600px;background-color:green;overflow: scroll;"><div style="height:1000px;width:500px;background-color:blue;">8...</div></div>
    </div>
    <div id="Key Modifiers">
      <!-- only call `vm.submit()` when the `key` is `Enter` -->
      enter:<input v-on:keyup.enter="submit"><br/>
      onPageDown:<input v-on:keyup.page-down="onPageDown"><br/>
      onKey:<input v-on:keyup.down.up.delete.esc.space.left.right.enter.tab="onKey"><br/>
      13(将过期):<input v-on:keyup.13="submit">
    </div>
    <div id="System Modifier Keys">
      <!-- Alt + C -->
      <input @keyup.alt.67="clear">

      <!-- Ctrl + Click -->
      <div @click.ctrl="doSomething">Do something</div>
    </div>
    <div id=".exact Modifier">
      <!-- this will fire even if Alt or Shift is also pressed -->
      <button @click.ctrl="onClick">A</button>

      <!-- this will only fire when Ctrl and no other keys are pressed -->
      <button @click.ctrl.exact="onCtrlClick">A</button>

      <!-- this will only fire when no system modifiers are pressed -->
      <button @click.exact="onClick">A</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Event",
        data(){ return {
            counter: 0,
            name: 'Vue.js'
        }},
        methods:{
            greet: function (event) {
                // `this` inside methods points to the Vue instance
                alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
                if (event) {
                    alert(event.target.tagName)
                }
            },
            say: function (message) {
                alert(message)
            },
            warn: function (message, event) {
                // now we have access to the native event
                if (event) event.preventDefault()
                alert(message)
            },
            onSubmit:function(){
                console.log("onSubmit");
            },
            doThis:function(){
                console.log("doThis");
            },
            doThat:function(){
                console.log("doThat");
            },
            onScroll:function(){
                console.log("onScroll");
            },
            submit:function(){
                console.log("submit");
            },
            onPageDown:function(){
                console.log("onPageDown");
            },
            onKey:function(event){
                console.log(event);
            },
            clear:function(event){
                console.log(event);
            },
            doSomething:function(event){
                console.log(event);
            },
            onClick:function(event){
                console.log(event);
            },
            onCtrlClick:function(event){
                console.log(event);
            }
        }
    }
</script>

<style scoped>

</style>
