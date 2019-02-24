<template>

<div id="detail-product-page" >
    <div class="child-center">
        <ul class="clearfix child-center-row">
            <li><ion-icon name="paper-plane"></ion-icon> Miễn phí vận chuyển đơn trên 200.000 VNĐ</li>
            <li><ion-icon name="swap"></ion-icon>Đổi trả hàng trong 30 ngày</li>
            <li><ion-icon name="happy"></ion-icon>Shop có hơn 8000 sản phẩm</li>

        </ul>
    </div>

    <div>
            <!-- Row -->
    <el-row class="wrap-detail-product">
        <!-- Cột 1 -->
            <el-col :span="16" class="wrap-product">
                <div v-for="(i , index) in sub_image" :key="index" class="card-product">
                    <el-card :body-style="{ padding: '5px' }" shadow="hover">
                        <img class="img-product" :src="`/images/detailProduct/${product.image}/${i}`" alt="">
                    </el-card>
                </div>
            </el-col>
    <!-- //Cột 2 -->
        <el-col :span="8" class="option">

            <div>
                <div class="gender">GIÀY {{product.gender.toUpperCase()}}</div>
                <div class="product-name">{{product.name}}</div>
                <div class="product-price">{{product.price}} VNĐ</div>
                <div class="product-color-text">MÀU CÓ SẴN</div>
                <div class="clearfix product-color-image">
                    <div><img src="../../static/images/colorImage/b1cdvb1srzne0j5ks50g.webp" alt=""></div>
                    <div><img src="../../static/images/colorImage/f85g1mnefzheom8zs3qk.webp" alt=""></div>
                    <div><img src="../../static/images/colorImage/nfzky9fwynjs6a5dnlxb.webp" alt=""></div>
                    <div><img src="../../static/images/colorImage/qve8onrr1qzf9ngo7fag.webp" alt=""></div>
                    <div><img src="../../static/images/colorImage/en_GB-DYO.webp" alt=""></div>
                </div>
            </div>

            <div >
                  <el-select style="width:100%;" placeholder="Chọn size">
                    <el-option v-for="(i , index) in 3" :key="index">
                        <el-button size="mini">{{i}}</el-button>
                        <el-button size="mini">Mini</el-button>
                        <el-button size="mini">Mini</el-button>
                        <el-button size="mini">Mini</el-button>
                    </el-option>
                </el-select>
                <div class="botton-option" >
                    <button class="add-to-cart">Thêm vào giỏ</button>
                    <button class="add-to-wishlist">
                                <svg id="wishlist-inactive" viewBox="0 0 20 24" width="100%" height="100%">
                                    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path>
                                </svg>
                    </button>
                </div>
                <!-- description -->
                <div class="product-description">
                    <p>{{product.description}}</p>
                </div>

                <!-- Review -->
                <div class="open-info">
                    <el-collapse accordion >
                        <el-collapse-item name="1">
                            <template slot="title">
                            <h3>Miễn phí vận chuyển, trả hàng &nbsp;</h3><i class="header-icon el-icon-info"></i>
                            </template>
                            <div>Bạn sẽ được miễn phí giao hàng, khi đơn hàng trên 200.000 VNĐ</div>
                            <p>&#9830; Giao hàng tiêu chuẩn trong 4-5 ngày </p>
                            <p>&#9830; Chuyển phát nhanh trong 2-3 ngày</p>
                            <br>
                            <br>
                            <br>
                            <p>Giao hàng tất cả các ngày trong tuần</p>
                            <p>(Ngoại trừ ngày lễ)</p>
                        </el-collapse-item>

                        <el-collapse-item name="2">
                            <template slot="title">
                            <h3>Nhận xét (4)</h3>
                            </template>
                            <div>Học sinh mầm non</div>
                            <div>Giày đi vừa chân, giao hàng nhanh ạ</div>
                        </el-collapse-item>
                        </el-collapse>
                </div>
            </div>

        </el-col>

    </el-row>
    </div>
</div>

</template>

<script>

import axios from 'axios'
export default {
    async fetch ({params ,  store }) {
    let  {data}  = await axios.get(`http://localhost:8080/products/${params.id}`)
    const product = data.response
    // console.log('product :', product.name);
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
    //   console.log('this.sub_image :', this.sub_image);
  },
  data() {
      return {
        
      }
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
.gl-icon {
    display: inline-block;
    vertical-align: text-top;
    width: 24px;
    height: 24px;
}
.gl-cta--icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    padding: 0;
    color: #000;
    background-color: #fff;
    border: 1.01565px solid #000;
    letter-spacing: 0;
    line-height: 47px;
}
#detail-product-page .child-center ul {
    background: rgb(247, 247, 247);
    height: 40px;
}
#detail-product-page .child-center ul li{
    width: auto;
    white-space: normal;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 14px;
    font-weight: 400;
    font-size: 12px;
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    color: #363738;
    list-style: none;
    float: left;
    padding: 0px 1%;
}
#detail-product-page .child-center ul li ion-icon{
    font-size: 14px;
    padding-right: 1%;
}
.wrap-detail-product{
    padding: 20px;
}
.wrap-product{
    padding-right: 2%;
}
.card-product{
    width: 50%;
    float: left;
    padding: 10px;
}

.img-product{
    width: 100%;
}
.gender{
    margin: 0 0 2px;
    color: #767677;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 2px;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-weight: 400;
}
.product-name {
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 1.5px;
}
.product-price {
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 20px;
}
.product-color-text {
    font-size: 18px;
    line-height: 16px;
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 1.5px;
}
.product-color-image div {
    float: left;
    width: 20%;
    padding: 1%;
}
.product-color-image img {
    width: 100%;
    
}
.add-to-cart, .add-to-wishlist {
    align-items: center;
    min-height: 50px;
    padding: 0 21px;
    line-height: 50px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: transform .1s cubic-bezier(.3,0,.45,1),color .1s cubic-bezier(.3,0,.45,1),border .1s cubic-bezier(.3,0,.45,1),background .1s cubic-bezier(.3,0,.45,1);
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-weight: 700;
    height: 50px;
    transform: translate(-3px,-3px);
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    border-radius: 0;
    box-shadow: none;
    outline: none;
    justify-content: space-between;

}
.add-to-cart:after , .add-to-wishlist::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px #000;
    transform: translate(3px,3px);
    transition: transform .1s cubic-bezier(.3,0,.45,1);
}
.add-to-cart{
    width: 70%;
}
.add-to-wishlist {
    width: 30%;
}
.botton-option {
    display: flex!important;
    margin-top :15px;
    margin-bottom: 25px;
}
.product-description, p {
    line-height: 1.75;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.open-info{
        line-height: 1.75;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}


</style>
