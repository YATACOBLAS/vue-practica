<template>
  <div>
    <div class="container">
      <form @submit.prevent="Enviar">
        <Input :task="task" />
      </form>
    </div>

    <div class="container-fluid">
      <table border="1">
        <tr>
          <td>id</td>
          <td>title</td>
        </tr>
        <tbody>
          <tr v-for="tk in tareas" :key="tk.id">
            <td>{{ tk.id }}</td>
            <td>{{ tk.texto }}</td>
            <td>{{ tk.estado }}</td>
            <td>{{ tk.grupo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import { mapState ,mapActions} from "vuex";
import { nanoid } from "nanoid";
export default {
  components: {
    Input,
  },
  data() {
      return {
          task : {
          id: "",
          texto: "",
          grupo: [],
          estado: "",
        }
      }
  },
  methods: {
      ...mapActions(['Add']),
    Enviar() {
      if (this.task.texto.trim() == "") {
        alert("Texto Vacio");
        return;
      } else {
        this.task.id = nanoid();
        this.Add(this.task) ;
        this.task = {
          id: "",
          texto: "",
          grupo: [],
          estado: "",
        };
      }
    },
  },
  computed: {
    ...mapState(["tareas", "task"]),
  },
};
</script>

