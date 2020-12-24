<template>
  <div>
    <form @submit.prevent="add">
      <input type="text" v-model.trim="texto" />
      <button class="btn btn-primary w-100">AGREGAR</button>
    </form>
  </div>
</template>

<script>
import { inject, ref } from "vue";
export default {
  setup() {
    const texto = ref("");
    const tareas = inject("tareas");
    const add = () => {
      if (texto.value != "") {
        const tarea = {
          texto: texto.value,
          estado: false,
          id: Date.now(),
        };

        tareas.value.push(tarea);
        texto.value = "";
      return;
      }
      console.log('TEXTO VACIO')
    };
    return { texto, add };
  },
};
</script>

<style lang="sass" scoped>
</style>