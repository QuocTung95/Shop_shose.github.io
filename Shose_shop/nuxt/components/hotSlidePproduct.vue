<template>
  <div class="block fitheight space-section-top ">
    <h3>HOT TREND</h3>
    <el-carousel indicator-position="outside" class="wrap-hot-product fitheight">
      <el-carousel-item  class="fitheight" v-for="item in 4" :key="item">
        <div class="product-in-face clearfix fitheight" >
          <div class="item fitheight" v-for="(i , index) in hotProducts" :key="index">
            <!-- <img class="fitheight" :src="`/images/allProduct/${i.name}`" alt=""> -->
            <el-card shadow="hover" :body-style="{ padding: '0px' }" class="fitheight">
              <nuxt-link :to="'./detailProduct/' + i.id">
              <img class="fitheight" :src="`/images/detailProduct/${i.image}/${i.image}`" alt="">
              </nuxt-link> 
              <p>{{i.name}}</p>
              <p>{{i.price}}</p>
            </el-card>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  computed : {
          hotProducts () {
        return this.$store.state.hotProducts
      }
  },
  data() {
    return {
      	hotProduct : [
					{name : '162050_shot1.jpg'},
					{name : '162054_standard.jpg'},
					{name : '162058_standard.jpg'},
          {name : '162060_standard.jpg'},
          {name : '162054_standard.jpg'},
				]
    }
  },
}
</script>

<style scoped>
.block {
  height: 100%;
  padding: 0px 15px;
}
.wrap-hot-product {
  height: 100%;
}
  .product-in-face{
  }
  .item {
    float: left;
    width: 20%;
    padding: 5px;
  }
  .product-in-face .item img {
    height: 150px;
  }
  .wrap-hot-product .el-carousel__container{
    height: 100%;
  }
  .wrap-hot-product .el-carousel__item {
    background-color: white!important;
  }
</style>
