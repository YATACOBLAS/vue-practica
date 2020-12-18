<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to the Home "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Banco.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
