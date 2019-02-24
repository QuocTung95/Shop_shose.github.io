  <template>

  <div id="cart">

    <div>
          <ul class="clearfix child-center-row">
            <li><ion-icon name="paper-plane"></ion-icon> Miễn phí vận chuyển đơn trên 200.000 VNĐ</li>
            <li><ion-icon name="swap"></ion-icon>Đổi trả hàng trong 30 ngày</li>
            <li><ion-icon name="happy"></ion-icon>Shop có hơn 8000 sản phẩm</li>
        </ul>
    </div>


    <div v-if="!allProductInCart">

        <div>
          <el-row>
            <el-col class="child-center" :span="16">
              <h3 class="empty-cart-title">GIỎ HÀNG CỦA BẠN TRỐNG</h3>
              <img src="../../static/images/logo/emptycart.png" alt="">
              <p>Giỏ hàng của bạn hiện tại đang trống, hãy tiếp tục tìm sản phẩm cho mình</p>
              <p style="margin-bottom:20px;">Hãy đăng nhập để mua hàng dễ hơn</p>
                  <nuxt-link to="./storeShose">
                <button style="height: 45px;" class="main-button">QUAY LẠI SHOP <i class="el-icon-back"></i></button>
                </nuxt-link>
            </el-col>
            <el-col class="get-help" :span="8">
              <h3>GIÚP ĐỠ</h3>
                <p>Khi nào nhận được hàng?</p>
                <p>Chính sách đổi trả</p>
                <p>Dùng voucher như nào?</p>
                <p style="height: 45px;">Tôi muốn trở thành cộng tác viên?</p>

                <h3 style="height: 45px;">CÁC PHƯƠNG THỨC THANH TOÁN</h3>
                <img src="../../static/images/logo/payment-method.png" alt="">

            </el-col>
          </el-row>
        </div>
    </div>

    <div v-else>
      <el-row v-for="(i, index) in allProductInCart" :key="index" :gutter="20">
        <el-col style="padding: 5px;" :span="16">

          <el-row>
            <el-col :span="8">
                <el-card class="card-img " :body-style="{ padding: '5px' }" shadow="hover">
                  <div>
                    <img :src="`/images/detailProduct/${i.image}/${i.image}`" alt="">
                  </div>
                </el-card>
            </el-col>


            <el-col class="info-cart" :span="8">
              <h3>{{i.name}}</h3>
              <br>
              <p>Giới tính : {{i.gender}}</p>
              <br>
              <p v-if="i.sale"> Giảm giá : {{i.sale}}</p>

              <h2>{{i.price}} VNĐ</h2>
            </el-col>
            <el-col class="cart-option" :span="8">
              <div>
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
              <div>
                <i class="el-icon-error"></i>
              </div>

              <div>
                <ion-icon name="heart-empty"></ion-icon>
              </div>
              
            </el-col>
            
          </el-row>
          

          <div>

          </div>
          

        </el-col>

        <el-col :span="8"><div></div></el-col>
      </el-row>
    </div>

  </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
      data() {
        return {
          checked : true
        }
      },
    computed : {
      user_id () {
        return this.$store.state.user_id
      },
      allProductInCart () {
        return this.$store.state.cart.allProductInCart.slice(1)
      },
      sub_image () {
        return this.allProductInCart.sub_image
      }
    },
    mounted (){
      console.log('this.productIncart :', this.sub_image);
    },

      methods: {
        
      },
  }
  </script>

  <style>
  #cart {
    padding: 70px 20px;
  }
      #cart ul li {
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
.empty-cart-tittle {
      font-family: AdineuePRO,Helvetica,Verdana,sans-serif;
    font-style: normal;
    font-weight: 600;
}
.get-help p {
  text-decoration: underline;
  line-height: 23px;
}
.get-help p:hover {
  background-color: black;
  color: #fff;
  cursor: pointer;
}
.card-img {
  width: 100%;
  
}
.card-img img {
  width: 100%;
}
.info-cart {
  padding-left: 20px;
}
.cart-option {
  
}
  </style>
