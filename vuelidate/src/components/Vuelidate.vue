<template>
  <div class="container">
    <div class="col-md-5">
      <form @submit.prevent="submit">
        <input
          type="email"
          placeholder="Email..."
      
          v-model.lazy="$v.email.$model"
          class="form-control my-3"
          :class="{
            'is-invalid': $v.email.$anyError ,
            'is-valid': !$v.email.$anyError && $v.email.$model.length > 0,
          }"
        />
        <p class="text-danger d-flex" v-if="!$v.email.required">Requerido</p>
        <input
          placeholder="Password"
          type="password"
          :class="{
            'is-invalid': !$v.clave.minLength && $v.clave.$model.length > 0,
          }"
          class="form-control my-3"
          v-model="$v.clave.$model"
        />
        <p
          class="text-danger"
          v-if="!$v.clave.minLength && $v.clave.$model.length > 0"
        >
          minimo 6
        </p>
        <input
          placeholder="PasswordRepeat"
          type="password"
          :class="{ 'is-invalid': $v.repeatClave.$error }"
          class="form-control my-3"
          v-model="$v.repeatClave.$model"
        />
        <p
          class="text-danger"
          v-if="
            !$v.repeatClave.sameAsPassword && $v.repeatClave.$model.length > 0
          "
        >
          No coinciden
        </p>
        <button type="submit" class="btn btn-success" :disabled="$v.$invalid">
          Enviar
        </button>
      </form>

    </div>
  </div>
</template>

<script>
import { email, required,sameAs, minLength } from "vuelidate/lib/validators";

export default {
  name: "validaciones",

  data() {
    return {
      email: "",
        clave: "",
      repeatClave: "",
    };
  },
  validations: {
    email: { required, email },
      clave: {
      required,
      minLength: minLength(6),
    },
    repeatClave: {
      sameAsPassword: sameAs("clave"),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("se generó un error");
        //this.submitStatus = "ERROR";
      } else {
        console.log("Campos enviados correctamente");
        // do your submit logic here
        //this.submitStatus = "PENDING";
        /*setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);*/
      }
    },
  },
};
</script>
