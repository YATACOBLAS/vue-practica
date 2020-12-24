<template>
    <div>
        <button @click="contador++"> Aumentar</button>
    </div>
</template>

<script>
import { inject } from 'vue'
export default{ 
      
        setup() {     
              const contador= inject('contador');
         
        return {contador};

         }
        }
</script>