<template>
  <div class="home">
      <h1> API PAISES </h1>
      
    <Lista />
  </div>
</template>

<script>
// @ is an alias to /src

import Lista from '@/components/CardList.vue'
export default {
  name: 'Home',
  components: {
    Lista
  }
}
</script>
