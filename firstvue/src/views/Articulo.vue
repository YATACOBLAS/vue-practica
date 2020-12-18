<template>
  <div>
    Articulo Inidividual Numero <h1>{{ $route.params.id }}</h1>
    <h2> {{Articulo}}</h2>
  </div>
</template>
<script>
export default {
  name: "Articulo",
  data() {
    return {
      Articulo: {},
    };
  },
  methods: {
    async getApi() {
        try {
             let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
         this.Articulo = await data.json();
       
        } catch (error) {
            console.log(error)
        }
     
    },
  },
  created() {
      this.getApi();
  },

};
</script>

<style lang="sass" scoped>
</style>