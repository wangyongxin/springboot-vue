<template>
  <div id="app">
    <div id="demo1">
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>
    <div id="demo2">
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <br>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>

      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div id="demo4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="demo5">
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>

    </div>
    <div id="demo6">
      <select v-model="selected2" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected2 }}</span>
    </div>

    <div id="demo7">
      <select v-model="selected3">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected3 }}</span>
    </div>

    <div id="demo8">
      <!-- `picked` is a string "a" when checked -->
      <input type="radio" v-model="picked2" value="a">

      <!-- `toggle` is either true or false -->
      <input type="checkbox" v-model="toggle">

      <!-- `selected` is a string "abc" when the first option is selected -->
      <select v-model="selected4">
        <option value="abc">ABC</option>
      </select>
    </div>

    <div id="demo9">
      <input
        type="checkbox"
        v-model="toggle2"
        true-value="yes"
        false-value="no"
      >
      <input type="radio" v-model="pick3" v-bind:value="a" @click="check">
    </div>

    <div id="demo10">
      <select v-model="selected5" @change="change">
        <!-- inline object literal -->
        <option v-bind:value="{ number: 123 }">123</option>
      </select>
    </div>

    <div id="demo11">
      <!-- synced after "change" instead of "input" -->
      <input v-model.lazy="msg" @click="changeMsg">
      <input v-model.number="age" type="number">
      <input v-model.trim="msg">
    </div>
  </div>
</template>

<script>
    export default {
        name: "FormInputBindings",
        data(){
            return {
                message: "",
                checked: false,
                checkedNames: [],
                picked: null,
                selected: '',
                selected2: [],
                selected3: 'A',
                options: [
                    { text: 'One', value: 'A' },
                    { text: 'Two', value: 'B' },
                    { text: 'Three', value: 'C' }
                ],
                picked2:'',
                toggle:'',
                selected4:null,
                toggle2:'yes',
                pick3:'3',
                a:'',
                selected5:null,
                msg:'',
                age:1
            }
        },
        methods:{
            check: function(){
                console.log(this.$data.a === this.$data.pick3);
            },
            change: function(){
                console.log(typeof this.$data.selected5);
                console.log(this.$data.selected5.number);
            },
            changeMsg: function(){
                this.$data.msg = '王勇欣'
                // console.log(this.$data.msg);

            },
        }
    }
</script>

<style scoped>

</style>
