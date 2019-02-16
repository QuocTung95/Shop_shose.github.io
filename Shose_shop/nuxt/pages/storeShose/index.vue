<template>
    <div class="contaner" id="space-top">

        <leftSide/>

  <!-- Phần thân show sản phẩm -->
  <div class="sideContaner contanerRight" id="rightside">
    <el-row :gutter="5">
      <el-col :span="6" v-for="(i, index) in products" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <nuxt-link :to="'./detailProduct/' + i.id">
            <img :src="`/images/product/${i.image}`" alt="">
          </nuxt-link>
          
          <div style="padding: 14px;">
            <span>{{i.description}}</span>
            <div class="bottom clearfix">
              <time class="time">time</time>
              <el-button @click="addToCart(i.id)" type="text" class="button">Add to cart</el-button>
              <button @click="deleteProduct(i.id , index)" class="btn-blue main-color space-text">Delete</button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>



  </div>
</div>

</template>
<script>
import axios from 'axios'

import leftSide from "../../components/leftSideMenu"
export default {
    components : {
        leftSide
    },


    async fetch ({ store }) {
    let  {data}  = await axios.get('http://localhost:8080/products')
    store.commit('products', data.response)
  },
    computed: {
    products (){
      return this.$store.state.products
    },
    id_productInCart () {
      return this.$store.state.cart.id_productInCart
    },
    user_id (){
      return this.$store.state.user_id
    }

  },
    mounted(){
      console.log('this.id_productInCart :', this.id_productInCart);
    },
    data() {
        return {
            isfixed: false,
        }
    },
    methods: {
    async deleteProduct(id, index) {
            try {
        const response = await this.$axios.$delete(`http://localhost:8080/product/delete/${id}`)
        this.$store.commit('deleteProduct', index)
      } catch (error) {
        throw Error(error.message)
      }
    },
    async addToCart(id, index){
      this.$store.dispatch('cart/addProductToCart', `${id}`)
      console.log('this.id_productInCart :', this.id_productInCart);
      console.log('user_id :', this.user_id);
      try {
        const response = await this.$axios.$put(`http://localhost:8080/cart/${this.user_id}`, {
          product_id : this.id_productInCart.map(i => Number(i))
        })
        if(response){
          console.log('response :', response);
        }
      } catch (error) {
        throw Error(error.message)
      }
    }
    },
}
</script>
<style>
    
</style>