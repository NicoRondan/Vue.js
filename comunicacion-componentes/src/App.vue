<template>
  <div id="app">
    <center>
      <img alt="Vue logo" src="./assets/logo.png">
      <Counter></Counter><br>
      <h2>List of Programming Course Plans</h2>
      <div class="planes">
        <Plans />
      </div>
    </center>
  </div>
</template>

<script>

import Counter from './components/Counter.vue'
import Plans from './components/Plans.vue'

export default {
  name: 'App',
  components: {
    Counter,
    Plans
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
