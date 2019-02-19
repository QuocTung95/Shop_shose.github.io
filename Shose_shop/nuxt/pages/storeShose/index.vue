<template>
    <div class="contaner" id="space-top">
      <div class="store">
        <leftSide class="leftSide"/>
              <!-- Phần thân show sản phẩm -->
        <div class="sideContaner contanerRight" id="rightside">

          <div v-for="(i, index) in products" :key="index" class="product-card" >
            <div class="sale-off"></div>
            <nuxt-link :to="'./detailProduct/' + i.id">
              <img :src="`/images/product/${i.image}`" alt="">
            </nuxt-link>
                <div style="padding: 14px;">
                  <div>{{i.description}}</div>
                    <div>{{i.price}}VNĐ <font-awesome-icon far icon="cart-plus" /></div>
                    <button  @click="addToCart(i.id)" class="add-to-cart">Thêm vào giỏ</button>
                    
                    <button v-if="isAdmin" @click="deleteProduct(i.id , index)" class="btn-blue main-color space-text">Delete</button>
                </div>
          </div>

<!-- v-bind:class="{ fixed: isfixed}" -->


          <!-- <el-row :gutter="5">
            <el-col :md="6" :sm="12" v-for="(i, index) in products" :key="index">
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
          </el-row> -->



  </div>
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
            isAdmin : false
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
.store{
  padding-top: 120px;
}
.store .isfixed {
  position: relative;
}
    .contaner{
      /* padding-top: 50px */
    }
    .product-card{
    float: left;
    width: 25%;
    padding: 0px 5px;
    position: relative;
    }
    .product-card:hover .add-to-cart {
      display: block;
    }

    .product-card img {
      width: 100%;
    }
    .leftSide{
      float: left;
    }
    .add-to-cart{
    display: block;
    padding: 8px 3px;
    /* background: rgba(255,255,255,0.9); */
    transition: background 0.2s;
    color: #373d54;
    border: none;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    background-color: #ffecf0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    }
    .add-to-cart:hover {
    background: #373d54;
    color: #fff;
    }
    .sale-off{
    width: 50px;
    height: 40px;
    position: absolute;
    background: url('../../static/images/background/salse-tamplate.png');
    /* -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
    background-size: cover;
    padding: 0;
    line-height: 31px;
    font-weight: 500;
    z-index: 1;
    color: #fff;
    font-size: 13px;
    text-align: center;
    }

    @media (max-width: 992px) {
      .product-card{
      width: 50%;
    }
    }
    @media (max-width: 768px) {
      .product-card{
      width: 50%;
    }
    }
</style>