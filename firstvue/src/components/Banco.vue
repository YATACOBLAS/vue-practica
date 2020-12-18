<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Tipo de Cuenta : {{ cuenta }}</h1>
    <h1 :style="color">Saldo : {{ saldo }}</h1>
    <h2>Cuenta {{ estado ? "Activa" : "Inactiva" }}</h2>

    <div v-for="(tarjeta, index) in tarjetas" :key="index">
      {{ index + 1 }}- {{ tarjeta }}
    </div>
    <Button @action="aumentar" msjboton="Aumetar Saldo" />
    <Button @action="disminuir" msjboton="Disminuir Saldo" :deshabilitar="deshabilitar" />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "HelloWorld",
  components: { Button },
  props: {
    msg: String,
  },
  data() {
    return {
      cuenta: "Visa",
      deshabilitar:false,
      saldo: 1000,
      estado: true,
      tarjetas: ["Visa", "MasterCard", "BCP"],
    };
  },
  methods: {
    aumentar() {
      this.saldo = this.saldo + 100;
      this.estado = true;
      this.deshabilitar=false;
      return 
    },
    disminuir() {
      if (this.saldo > 0) {
          this.saldo = this.saldo - 100;
        if (this.saldo === 0) {
          this.estado = false;
            this.deshabilitar=true
          return ;
        }
        return;
      }
    },
    color() {
      return this.saldo <= 500 ? "color:red" : "color:black";
    },
  },
};
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
