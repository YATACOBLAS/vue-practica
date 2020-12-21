<template>
  <div>
    <h1>Hello  Articles</h1>
        <Banco msg="Hi mi friends este blog abarca   todo sobre lo que haremos este 2021" />
         Buscar <input type="text" v-model="title" />
 
      <table border="1">
        <tr>
          <td>id</td>
          <td>title</td>
        </tr>
        <tbody>
          <tr v-for="post in searchList" :key="post.id">
            <td>{{ post.id }}</td>
            <td> <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link></td>
          </tr>
        </tbody>
      </table>
   
  </div>
</template>

<script>
import Banco from "@/components/Banco.vue";

export default {
  name: "Blog",

components:[Banco],
  data() {
    return {
      arrayPost: [],
      title:"",
    };
  },
  methods: {
    async getApi() {
        try {
             let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let res = await data.json();
      this.arrayPost = await res.map(elemento => elemento  );
        } catch (error) {
            console.log(error)
        }
     
    },
  },
  created() {
      this.getApi();
  },
  computed: {
    searchList () {
      return this.arrayPost.filter((ele) => ele.title.includes(this.title));
    },
  },
};
</script>

<style lang="sass" scoped>
</style>