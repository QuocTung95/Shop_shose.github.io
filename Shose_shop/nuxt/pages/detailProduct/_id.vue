<template>

<div>
    <p>{{product.name}}</p>
</div>

</template>

<script>

import axios from 'axios'
export default {
    async fetch ({params ,  store }) {
    let  {data}  = await axios.get(`http://localhost:8080/products/${params.id}`)
    const product = data.response
    console.log('product :', product.name);
    store.commit('detailProduct/product', data.response)
  },
  computed : {
      product (){
          return this.$store.state.detailProduct.product
      }
      
  }
}
</script>

<style>
    
</style>
