import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 1850,
    contMarte:100,
    contMar:100,
    contNatura:100,
    name: 'Jhon',
    tareas:[],
    task: {
      id:"",
    texto: "",
    grupo: [],
    estado: "",
    }
  },
  mutations: {
    Incrementar(state,payload) {
      state.contador = state.contador + payload;
    },
    Disminuir(state) {
      state.contador = state.contador - payload;
    },
    Traducir(state) {
      if (state.name == 'Jhon') {
        state.name = 'Juan'
      }
      else {
        state.name = 'Jhon'
      }
    },
    MasMarte(state,payload) {
      state.contMarte = state.contMarte + payload;
    },
    
    MasMar(state,payload) {
      state.contMar = state.contMar+ payload;
    },
    MasNaturaleza(state,payload) {
      state.contNatura = state.contNatura + payload;
    },
    MasReset(state) {
     state.contMar=0;
     state.contMarte=0;
     state.contNatura=0;
    },
    AddTarea(state,payload){
      state.tareas.push(payload);
    }
  },

  actions: {
      accionIncrementar({commit}){
        commit('Incrementar')
      },
      accionDisminuir({commit}){
        commit('Disminuir');
        commit('Traducir');
      },
      accionTraductor({commit}){
        commit('Traducir')    
      },
      BotonMulticolor({commit}, objeto){
        if(objeto.color=='rojo'){
          commit('MasMarte',objeto.numero)
        }else if (objeto.color=='azul'){
          commit('MasMar',objeto.numero)
        }
        else if (objeto.color=='verde'){
          commit('MasNaturaleza',objeto.numero)
        }
        else{
            commit('MasReset')
        }
        
      },
      Add({commit},tarea){
        commit('AddTarea',tarea)
      }
  },
  modules: {
  }
})
