<template>
  <div id="wrap">
 <!-- HORIZONTAL -->
        <div id="nav_horizontal" >
            <ul>
              
                <li> <nuxt-link to="/">HOME</nuxt-link></li>
                <li>
                    <nuxt-link to="./storeShose">SHOP</nuxt-link>
                </li>
                <li v-if="user_id" class="getcart" @click="getCart()"><nuxt-link to="/cart"><ion-icon name="cart"></ion-icon> </nuxt-link></li>
                <li v-if="user_id" class="info"><a style="float:right;" href='javascript:void(0)' @click="logout()">ĐĂNG XUẤT</a></li>
                <li v-else class="info"><a style="float:right;" href='javascript:void(0)' @click="showLogin()">ĐĂNG NHẬP</a></li>
            </ul>
        </div>

        <loginModel v-bind:class="{ showLogin: isLogin}"  id="form-register"/>


    <nuxt/>
    <leftSide style="display: none;"/>

    <!-- FOOTER -->

    <footerSide />


  </div>
</template>

<script>
import loginModel from "../components/login";
import footerSide from "../components/footer";
import leftSide from "../components/leftSideMenu"
// import Icon from "vue-awesome"
// import Icon from 'vue-awesome/components/Icon.vue'
export default {
    components : {
      loginModel : loginModel,
      footerSide : footerSide,
      leftSide
      // Icon
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isLogin: false,
      };  
    },
    created() {
    // window.addEventListener('keydown', (e) => {
    //   if (e.key == 'Escape') {
    //     this.isLogin = false
    //   }
    // });

    },
    computed: {
      user_id () {
        return this.$store.state.user_id
      },
    },
    async mounted (){
          window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        this.isLogin = false
      }
      if(this.user_id) {
        this.isLogin = false
      }
    });
        var token =   this.$cookie.get('Bearer')
        this.$store.dispatch('token', token)

        var user_id =   this.$cookie.get('user_id')
        this.$store.dispatch('user_id', user_id)

        let  data  = await this.$axios.$get(`http://localhost:8080/cart/${this.user_id}`)
        this.$store.dispatch('cart/id_productInCart', data.result.product_id )
        // store.commit('cart', data.response)
        let total_id = data.result.product_id
        let allProductInCart = []
        for(let id of total_id){
          const product = await this.$axios.$get(`http://localhost:8080/products/${id}`)
          allProductInCart.push(product.response)
        }
        this.$store.dispatch('cart/allProductInCart', allProductInCart)
    },

    methods: {
      showLogin () {
        this.isLogin = !this.isLogin
      },
      async getCart () {
            let  data  = await this.$axios.$get(`http://localhost:8080/cart/${this.user_id}`)
            this.$store.dispatch('cart/id_productInCart', data.result.product_id )
            // store.commit('cart', data.response)
            let total_id = data.result.product_id
            let allProductInCart = []
            for(let id of total_id){
              const product = await this.$axios.$get(`http://localhost:8080/products/${id}`)
              allProductInCart.push(product.response)
            }
            this.$store.dispatch('cart/allProductInCart', allProductInCart)
      },
      async  logout(){
          try {
              await this.$axios.$get("http://localhost:8080/logout")
                  this.$message({
                  type: 'success',
                  message: 'logout Success'
              });
                  // xóa token và user_id ở store và cookie
                  this.$cookie.delete('Bearer');
                  this.$store.dispatch('token', '')

                  this.$cookie.delete('user_id');
                  this.$store.dispatch('user_id', '')
          } catch (error) {
              throw Error(error.message)
          }
    },
    },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}





*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.footer-page{
  width: 100%;
  height: 100px;
  background-color: rebeccapurple;
}

#form-register {
  position: fixed;
  top : 200px;
  left: 200px;
  z-index: 5;
}
.showLogin{
  display: block!important;
}




/* MENU  HORIZONTAL */
#nav_horizontal {
    position: fixed;
    width: 100%;
    z-index: 3;
}

#nav_horizontal > ul {
  background-color: #333333a8;
}
#nav_horizontal > ul::after {
  content: "";
  clear: both;
  display: table;
}
#nav_horizontal ul li {
  list-style: none;
  position: relative;
}
#nav_horizontal ul li a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
}
#nav_horizontal ul li a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}
#nav_horizontal ul li a:hover:after {
    width: 100%;
    left: 0;
}
#nav_horizontal ul li:hover > ul {
  display: block;
  background-color: #333333;
}
#nav_horizontal > ul > li {
  float: left;
  width: 18%;
}
#nav_horizontal > ul > li ul {
  position: absolute;
  display: none;
  white-space: nowrap;
  margin-top: -1px;
  z-index: 1000;
  min-width: 100%;
}
#nav_horizontal > ul > li ul li {
  border-bottom: 1px solid #ffffff;
}
#nav_horizontal > ul > li ul li a {
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px;
}
#nav_horizontal > ul > li ul li:first-child {
  border-top: 1px solid #ffffff;
}
#nav_horizontal > ul > li > ul {
  top: 100%;
  left: 0;
}
#nav_horizontal > ul > li > ul li ul {
  top: 0%;
  left: 100%;
  border-left: 1px solid #fdfdfd;
}
#nav_horizontal > ul > li ul li:hover {
  background-color: whitesmoke;
}
#nav_horizontal > ul > li ul li:hover > a {
  color: #333333;
}
#nav_horizontal > ul > li .info{
  width: 55%
}


/* ////// */
.getcart{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    width: 45%!important;
}
</style>
