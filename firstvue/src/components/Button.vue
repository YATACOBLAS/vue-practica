<template>
  <div>
    <button @click="accionar" :disabled="deshabilitar">{{ msjboton }}</button>

    <button @click="accionDisminuir" >Minimizar</button>
    <h1>Boton : {{ contador }}</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Button",
  props: {
    msjboton: String,
    deshabilitar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    accionar() {
      this.$emit("action");
    },
    ...mapActions(["accionDisminuir"])
  },
  computed: {
    ...mapState(["contador"])
  },
};
</script>