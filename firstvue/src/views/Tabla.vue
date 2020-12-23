<template>
  <div>
    <div class="container">
      <form @submit.prevent="Enviar">
        <Input :task="task" />
        <div v-if="modificando">
          <button @click="Modificar" >Modificar </button>
        </div>
        <div v-else>
          <input type="submit" value="Enviar" />
        </div>
      </form>
      <div v-if="modificando">
        <button @click="modificando = false">Cancelar</button>
      </div>
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
            <td>
              <button
                @click="AccionEliminar(tk.id)"
                style="background:red, color:white"
              >
                Eliminar
              </button>
            </td>
            <td>
              <button
                @click="Editar(tk.id)"
                style="background:blue, color:white"
              >
                Modificar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import { mapState, mapActions } from "vuex";
import { nanoid } from "nanoid";
export default {
  components: {
    Input,
  },
  data() {
    return {
      task: {
        id: "",
        texto: "",
        grupo: [],
        estado: "",
      },
      modificando: false,
    };
  },
  methods: {
    ...mapActions(["Add", "accionEliminar"]),
    Enviar() {
      if (this.task.texto.trim() == "") {
        alert("Texto Vacio");
        return;
      } else {
        this.task.id = nanoid();
        this.Add(this.task);
        this.task = {
          id: "",
          texto: "",
          grupo: [],
          estado: "",
        };
      }
    },
    Editar(id) {
      this.modificando = true;
      this.task = {
          id: "",
          texto: "",
          grupo: [],
          estado: "",
        };
      this.tareas.map( ele   =>  ele.id==id ?  this.task={ id:ele.id,texto:ele.texto,grupo: ele.grupo,estado:ele.estado} : console.log('error al buscar'));
        
    },
    
  },

  computed: {
    ...mapState(["tareas", "task"]),
  },
};
</script>

