<template>
<div>

  <h1 :style="changeColor" >Contador : {{contador}}</h1>
  <contadoruno />
  <boton />

  <div>
    <h1> TO DO APP </h1>
      
      
      
        <AppTask />
  </div>
</div>
</template>

<script>
import AppTask from '@/components/TareaApp.vue'
import {computed, provide,ref} from 'vue'
import contadoruno from '@/components/contadoruno.vue';
import boton from '@/components/boton.vue'
export default {
  name: 'App',
  components: {
  contadoruno,boton,AppTask
  },
  setup(){

  const contador = ref(0);
  const color = true;
    provide('contador',contador);

  const changeColor = computed (()=> {
        return [ (color && (contador.value%2===0) ) ?  'color:green' :((color && (contador.value%3===0) ) ? 'color:red' :'color:blue'  )]
    
    })

  return {contador,changeColor}
    
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
