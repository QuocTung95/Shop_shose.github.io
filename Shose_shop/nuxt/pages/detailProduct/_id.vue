<template>

<div id="wrap-detail-product">
    <div class="text-center"><p>SOMETHING HERE</p></div>
    <el-row>
    <el-col :span="8" class="padding">
        <div>
            <img class="img-product" :src="`/images/product/${product.image}.jpg`" alt="">
        </div>
    </el-col>
        <el-col :span="8" class="padding">
        <div>
            <img class="img-product" :src="`/images/product/${product.image}.jpg`" alt="">
        </div>
    </el-col>
    <el-col :span="8" class="padding">
        <h3>
            {{product.name}}
        </h3>
        <div>
            <p>{{product.description}}</p>
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
      }
      
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#wrap-detail-product{
    padding-top: 60px;
}
.img-product{
    width: 100%;
}

.el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
