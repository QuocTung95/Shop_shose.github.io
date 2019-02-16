export const state = () => ({
    id_productInCart: [],
    allProductInCart : []
  })
  
  export const mutations = {
    id_productInCart (state, payload) {
        state.id_productInCart = payload
    },
    allProductInCart (state, payload) {
      state.allProductInCart = payload
  },
    addProductToCart (state, payload){
      state.id_productInCart.push(payload)
    }
  }

  export const actions = {
    id_productInCart ({commit}, payload){
      commit('id_productInCart', payload)
    },
    allProductInCart ({commit}, payload){
      commit('allProductInCart', payload)
    },
    addProductToCart ({commit}, payload) {
      commit ('addProductToCart', payload)
    }
  }