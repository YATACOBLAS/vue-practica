import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setpaises(state, payload) {
      state.paises = payload;
    },
    setpaisesFiltrados(state, payload) {
        state.paisesFiltrados = payload;
    }
  },
  actions: {
    async getPaises({ commit }) {

      try {
        const res = await fetch('https://restcountries.eu/rest/v2/');
        const data = await res.json();
       commit('setpaises', data)
       
      } catch (error) {
        console.log(error)
      }
    },
    filtrarPaises({commit,state},region){
         const filtro= state.paises.filter(ele => ele.region.includes(region))
        commit('setpaisesFiltrados',filtro);
        },
    filtrarNombre({commit,state},texto){
          const filtro =state.paises.filter(ele=> ele.name.toLowerCase().includes(texto.toLowerCase()))
        
          commit('setpaisesFiltrados',filtro);
    }

  },
getters:{
  getTopPaises(state){
    if(state.paisesFiltrados.length!==0) { 
    
      return state.paisesFiltrados.sort( (a,b) => a.population < b.population ? 1: -1 );
      //ordenar de mayor a menor    
    } 
    return state.paises.sort( (a,b) => a.population < b.population ? 1: -1 );
     }
    },
  modules: {
  }
})
