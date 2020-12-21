<template>
  <div>
    <input type="text" v-model="task.texto" />
    <input
      type="checkbox"
      id="javascript"
      v-model="task.grupo"
      value="Javascript"
    />
    <label for="javascript">Javascript</label>
    <input type="checkbox" id="Nodejs" v-model="task.grupo" value="Nodejs" />
    <label for="Nodejs">Nodejs</label>
    <input type="checkbox" v-model="task.grupo" id="Python" value="Python" />
    <label for="Python">Pyhton</label>
    <input
      type="radio"
      id="radio1"
      value="radio1"
      v-model="task.estado"
    /><label for="radio1">Radio-1</label>
    <input type="radio" id="radio2" value="Bocina" v-model="task.estado" />
    <label for="radio2">Bocina</label>
    <br />
    <input type="submit" value="Enviar" />
  </div>
</template>
    
    <script>
export default {
  props: { task: Object },
};
</script>
    
    <style lang="sass" scoped>
</style>