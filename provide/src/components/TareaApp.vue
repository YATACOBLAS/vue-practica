<template>
      <div>
            <tarea-form></tarea-form>
           <tarea-item :tarea="tarea" v-for="tarea in tareas" :key="tarea.id" >

           </tarea-item>
                     {{tareas}}
    </div>
</template>

<script>

import {provide, ref, watchEffect} from 'vue'
    import tareaItem from './TareaItem.vue';
    import tareaForm from './TareaForm.vue'
    export default {
        components:{
            tareaItem,
            tareaForm

        },
        setup() {   
          const tareas = ref([])
          provide('tareas',tareas);  

                    if(localStorage.getItem('tareas')){
                        tareas.value =JSON.parse( localStorage.getItem('tareas'))
                    }

                watchEffect(()=>{
                        localStorage.setItem('tareas',JSON.stringify(tareas.value))

                })

          return {tareas}
        }    
        
    }
</script>

<style lang="sass" scoped>

</style>