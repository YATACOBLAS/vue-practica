<template>
    <div>
        <button @click="accionar"  :disabled="deshabilitar">{{msjboton}}</button>
    </div>
</template>

<script>
    export default {
    name:'Button',
    props:{msjboton:String,
    deshabilitar:{
        type:Boolean,
        default:false
    } },
    methods: {
        accionar(){
            this.$emit('action')
        }
    },
    }
</script>

<style lang="sass" scoped>

</style>