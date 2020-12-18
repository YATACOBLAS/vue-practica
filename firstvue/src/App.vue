<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Banco msg="Mi Banco 2.0" />
</template>

<script>
import Banco from './components/Banco.vue'

export default {
  name: 'App',
  components: {
    Banco
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
