<template>
    <div class="alert alert-warning  d-flex  justify-content-between" >
       <del v-if="!tarea.estado">
      <p> {{tarea.texto}}</p>
       </del>
       <p v-else>{{tarea.texto}} </p>
  <div class="">
    <i v-if="tarea.estado" class="fas fa-check-circle px-2 text-success" @click="jardoc_reverse(tarea.id)"  role="button"></i>  <i v-else class="fas fa-undo-alt text-success" role="button" @click="jardoc(tarea.id)"></i>  <i  class="fas fa-minus-circle px-2 text-danger" role="button" @click="del(tarea.id)"></i> </div>

  </div>
</template>

<script>
import computed, { inject } from 'vue';
    export default {
      props:{
        tarea:
        {type:Object,
        require:"true" }
    
      },
    setup(props) {

       const tareas=inject('tareas')
        const jardoc = (id)=> {      
             props.tarea.estado=true;
        }
          const jardoc_reverse = (id)=> {      
             props.tarea.estado=false;
        }
        const del= (id) => (
                tareas.value =tareas.value.filter(ele => {
               return ele.id!=id
            })
          
         )
     
        
        return {jardoc,del,jardoc_reverse}
 
    }


    }
</script>
