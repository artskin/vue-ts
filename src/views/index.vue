<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>hello ts:{{msg}}</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import Component from 'vue-class-component'


@Component({
  
})
export default class App extends Vue {
  msg: 'vue class ts'

  mounted(){
    this.greet()
  }

  get computedMsg(){
    return "computed:-"+this.msg
  }

  greet(){
    console.log("output:"+this.msg)
  }

}
</script>
