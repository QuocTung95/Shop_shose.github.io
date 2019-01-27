export const state = () => ({
    counter: 0,
    products: [],
    users : [],
  })
  
  export const mutations = {
    increment (state) {
      state.counter++
    },
    products (state, payload) {
      state.products = payload
    },
    deleteuser (state, index){
      state.products.splice(index, 1)
    },
    users (state , payload){
      state.users = payload
    }
  }


  
  // ACTION

  // export const actions = {
  //   add (state, text) {
  //     state.list.push({
  //       text: text,
  //       done: false
  //     })
  //   },
  //   remove (state,  todo ) {
  //     state.list.splice(state.list.indexOf(todo), 1)
  //   },
  //   toggle (state, todo) {
  //     todo.done = !todo.done
  //   }


  // }