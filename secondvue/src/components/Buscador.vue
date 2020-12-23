<template>
    <div>
   <input v-model="texto" @keyup="procesarInput"   placeholder="Buscar" type="text">
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
    export default {
        
    setup(){
        const store = useStore();              
            const texto = ref('');

        const procesarInput =computed(()=> {
           console.log(texto.value)
           store.dispatch('filtrarNombre',texto.value)

        })

            return {texto,procesarInput};
        }
    }
</script>

<style lang="sass" scoped>

</style>