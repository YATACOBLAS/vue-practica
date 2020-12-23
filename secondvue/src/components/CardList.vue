<template>
  <div>
    <div class="text-center">Lista de Paises</div>
    <br />
     <button @click="FilterCountry('Asia')" >Asia</button>
     <button @click="FilterCountry('Africa')" >Africa</button>
     <button @click="FilterCountry('Americas')" >Americas</button>
     <button @click="FilterCountry('Europe')" >Europa</button>
     <button @click="FilterCountry('Oceania')" >Oceania</button>
     <button @click="FilterCountry('')" >All</button>
    <br />
    <Buscador />
    <br>
    <div class="container">
      <div v-for="(country, index) in countries" :key="index" class="col-12">
        <Card :country="country" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "./Card.vue";
import Buscador from './Buscador.vue'
export default {
  components :{
    Card,Buscador
  },
  setup() {
    const store = useStore();
    
    const countries = computed(() => {
      //retornar el estado paises
      //return store.state.paises;
      //retornar paises top población
      return store.getters.getTopPaises;
    });
    const FilterCountry = ((reg)=>{
        store.dispatch('filtrarPaises',reg);
      return store.state.paisesFiltrados;
    })
    onMounted(() => {
      //LO QUE SE EJECUTA DENTRO DE onMounted es asincrono
      store.dispatch("getPaises");
      
    });
    //ya que quiero pintar los paises lo retorno
    return { countries,FilterCountry };
  },
};  
</script>

<style lang="sass" scoped>
</style>