<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  <Vuelidate />
  </div>
</template>

<script>
import Vuelidate from '@/components/Vuelidate.vue'
export default {
  name: 'App',
  components: {
    Vuelidate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
