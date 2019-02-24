<template>
    <div id="wrap-hot-trend">
        <div class="hot-product space-top">
            
            <el-row>
                <el-col :span="12" class="best-seller">
                <img src="../static/images/bestSeller/5aa33afdc94f198feb57aae79329fdd28163a126_banner-2.jpg" alt="">
                <h3>WOMENS COLLECTION</h3>
                <button class="btn-blue">Chi tiết</button>
                </el-col>
                <el-col :span="12" class="best-seller">
                <img src="../static/images/bestSeller/c3690c904e6d2d26fbe198e23961c8ecd35e644c_banner-3.jpg" alt="">
                <h3>WOMENS COLLECTION</h3>
                <button class="btn-blue">Chi tiết</button>
                </el-col>
            </el-row>

            <div style="text-align: center;" class="space-text">Khám phá những sản phẩm mới nhất</div>
            <div class="child-center">
                <nuxt-link to="./storeShose">
                <button style="height: 45px;" class="main-button">VÀO SHOP <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#wrap-hot-trend{
  margin-top:25px;
  /* background-color: #ebddec9e; */
  background-image: linear-gradient(to bottom right, #0D47A1, #FFCDD2);
}
.hot-product {
    padding: 13px 15px;
}
  
  

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .best-seller{
    padding: 5px;
    position: relative;
  }
   .best-seller img{
     width: 100%;
   }
   .best-seller .btn-blue{
    position: absolute;
    top: 57%;
    left: 14%;
   }
   .best-seller .btn-blue:hover{
     background-color: #87b840;
   }
   .best-seller h3{
    position: absolute;
    top: 40%;
    left: 5%;
    color: white;
   }
</style>