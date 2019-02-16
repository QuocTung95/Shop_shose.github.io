  <template>

  <div id="space-top">
    <el-row v-for="(i , index) in allProductInCart" :key="index" :gutter="20">
      <el-col :span="16">
        <el-card :body-style="{ padding: '0px' }">
            <img :src="`/images/product/${i.image}`" alt="">
            <p>{{i.image}}</p>
            <button>fasd</button>
        </el-card>
      </el-col>

      <el-col :span="8"><div></div></el-col>
    </el-row>
  </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
      data() {
        return {
        }
      },
    computed : {
      user_id () {
        return this.$store.state.user_id
      },
      allProductInCart () {
        return this.$store.state.cart.allProductInCart
      }
    },
    mounted (){
      console.log('this.productIncart :', this.allProductInCart);
    },

      methods: {
        
      },
  }
  </script>

  <style>
      
  </style>
