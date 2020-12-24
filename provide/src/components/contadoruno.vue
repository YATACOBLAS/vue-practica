<template>
    <div>
        <h1>Contador secundario :{{ contador }}</h1>
    </div>
</template>

<script>
import { inject }from 'vue'
export default {
        setup() {
            const contador=inject('contador')
        return {contador}        
        }
    }
</script>
