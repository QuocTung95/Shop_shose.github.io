<template>

<div id="detail-product-page">
    <div class="child-center"><p>{{product.name}}</p></div>
    <!-- Row -->
    <el-row class="wrap-detail-product">
        <!-- Cột 1 -->
            <el-col :span="16" class="wrap-product">
                <div v-for="(i , index) in sub_image" :key="index" class="card-product">
                    <img class="img-product" :src="`/images/product/${i}`" alt="">
                </div>
            </el-col>
    <!-- //Cột 2 -->
        <el-col :span="8" class="padding">

            <div>
                <p>Chọn size</p>
                
            </div>

        </el-col>

    </el-row>
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
      },
      sub_image(){
          return this.product.sub_image
      }
  },
  mounted() {
      console.log('this.sub_image :', this.sub_image);
  },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#detail-product-page{
    padding-top: 60px;
}
.wrap-detail-product{
    padding: 20px;
}
.wrap-product{

}
.card-product{
    width: 50%;
    float: left;
    padding: 10px;
}

.img-product{
    width: 100%;
}
</style>
