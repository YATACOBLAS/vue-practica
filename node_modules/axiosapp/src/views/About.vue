<template>
  <div>
    <button @click="obtenerCountry">Enviar</button>

  </div>
</template>

<script>

import axios from "axios";

export default {

data() {
  return {
     paises:[]
  }
},
methods: {
async obtenerCountry(){
  const paises = await axios.get('https://restcountries.eu/rest/v2/all').then((response)=> {
    console.log(response.data.filter(ele=> ele.region.includes('asia')))
  })
}  
},
    // https://restcountries.eu/rest/v2/all
  }
</script>

<style lang="sass" scoped>

</style>
