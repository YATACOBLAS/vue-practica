<template>
  <div>
    <div class="card m-3 p-3" style="background: grey">
      <div class="card-head">
        <img :src="country.flag" alt="" class="img-fluid" style="width: 300px" />
      </div>
      <div class="card-body">
          <h5>Name: {{ country.name }}</h5>
         <span class="badge badge-success d-block  py-4 m-1">Quantity:{{ formateo(country.population) }}</span>
                   <span class="badge badge-dark d-block m-1">Capital:{{ country.capital }}</span>
          <span class="badge badge-dark d-block m-1">Region:{{ country.region }}</span>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  props: [ 'country' ],
  setup() {
        const formateo = (num)=> {
            return new Intl.NumberFormat("de-DE").format(num)
        }

        return {formateo}
  }
};
</script>