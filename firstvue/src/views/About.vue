<template>
  <div class="about">
    <h1>This is an about page</h1>
  
  <Banco msg="Welcome to the About" />

  </div>
  
</template>

<script>
import Banco from '@/components/Banco.vue';

export default {
    name:'About',
    components:{
      Banco
      }

 }

</script>