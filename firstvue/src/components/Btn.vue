[<template>
    <div>
            <button  @click="BotonMulticolor({'color': estado,'numero':numero})" :style="estilo" >{{valorEstado}} </button>
    </div>
</template>

<script>
import {mapActions} from  'vuex';
    export default {
    props:{
        estado :String, 
        numero:Number
        }, 
        methods: {
            ...mapActions(['BotonMulticolor'])
        },
    computed:{
        valorEstado(){
            return (this.estado=='rojo' ?'Marte': this.estado=='azul' ? 'Mar':this.estado=='verde'? 'Naturaleza':'Reset' )
        },
        estilo(){
       return [this.estado=='rojo' ? 'color:red': this.estado=='azul' ? 'color:blue':this.estado=='verde'? 'color:green':'color:pink']            
        }

    }    


    }
</script>

<style lang="sass" scoped>

</style>