export const state = () => ({
    counter: 0,
    products: [],
    token : '',
    user_id : '',
    
  })
  
  export const mutations = {
    increment (state) {
      state.counter++
    },
    products (state, payload) {
      state.products = payload
    },
    deleteProduct (state, index){
      state.products.splice(index, 1)
    },
    token (state , payload){
      state.token = payload
    },
    user_id (state, payload) {
      state.user_id = payload
    },
  }  
  // ACTION

  export const actions = {
    deleteProduct ({commit}) {
      commit('deleteProduct')
    },
    token ({commit}, payload){
      commit('token', payload)
    },
    user_id ({commit}, payload){
      commit('user_id', payload)
    },



  }