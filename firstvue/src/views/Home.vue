<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>====  Vuex====</h1>
    <h1>{{ $store.state.contador }} Numero</h1>
    <h2 :style="colorNumero">{{ contador }}</h2>
    <h2 :style="colorNombre">{{name}}</h2>
    <button @click="accionTraductor">Traducir</button>
    <button @click="accionIncrementar">Incrementar</button>
    <button @click="accionDisminuir">Disminuir</button>
   <hr/>
   {{contMar }}-{{contNatura}}-{{contMarte}}
   <colorbtn :numero="100" :estado="'rojo'"   />
   <colorbtn :numero="200" :estado="'azul'"   /> 
   <colorbtn :numero="80"  :estado="'verde'"  /> 
   <colorbtn :numero="90" :estado="'negro'"   />
  </div>
</template>
<script>
// @ is an alias to /src
import colorbtn from '@/components/Btn.vue'
import { mapState,mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  components: {colorbtn},
methods: {

          
  ...mapMutations(['Traducir','Incrementar','Disminuir']),
...mapActions(['accionIncrementar','accionDisminuir','accionTraductor','BotonMulticolor'])
},
  computed: {
    ...mapState(["contador", "name","contMarte","contMar","contNatura"]),
    
    colorNumero() {
      return [this.contador > 100 ? { 'color': "green" } : { 'color': "red" }];
    },
    colorNombre(){
      return [this.name.length > 5 ? { 'color': 'blue' } : { 'color': 'peru' }]
    }
  }
};
</script>
