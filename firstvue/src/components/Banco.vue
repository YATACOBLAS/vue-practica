<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Tipo de Cuenta : {{cuenta}}</h1>
    <h1 :style="[ (saldo<=500) ? 'color:red':'color:black']"> Saldo : {{ saldo}}</h1>
         <div v-if="Activo" >Cuenta Activa</div>
         <div v-else> Cuenta Inactiva</div>
    <div v-for="(tarjeta, index) in tarjetas" :key="index" > 
      {{index + 1}}- {{tarjeta}}
    </div>
   </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
     cuenta:'Visa',
     saldo:'1000',
     Activo:true,
     tarjetas:['Visa','MasterCard','BCP']
    }
  },
  methods: {
      aumentar(){
        this.saldo = this.saldo+100;
      },
      disminuir (){
        if(this.saldo===0){
          this.Activo=false;
          return
        }
        this.saldo=this.saldo - 100;
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
