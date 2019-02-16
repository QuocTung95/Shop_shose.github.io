<template>
<section>
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="../static/images/banner1.jpg" alt="">
    </el-carousel-item>
    </el-carousel>

    <Logo />

    <div style="margin-top:50px;">
      <h3 class="space-left">HOT NHẤT TRONG TUẦN</h3>
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
          <button style="height: 45px;" class="btn-blue main-color space-text">VÀO SHOP</button>
        </nuxt-link>
      </div>
    </div>

    <!-- parallax -->
    <div class="parallax"></div>
    <div style="margin-top:10px;" class="space-text">
      <h3 class="space-left">VALENTINE VÀ NHỮNG CHUYẾN ĐI CÙNG NHAU</h3>
    </div>
    <div class="valentine">
      <img src="../static/images/bestSeller/2.7_HP_XCAT_VALENTINE'S_DAY_DT_XA_AEM.png" alt="">
      <div class="text">
        <h3 class="space-text">WHAT’S NOT TO LOVE?</h3>
        <p class="space-text">Give Sport this Valentine’s Day.</p>
      </div>
        <nuxt-link to="./storeShose">
          <button style="height: 45px;" class="btn-blue main-color">VÀO SHOP</button>
        </nuxt-link>

    </div>







</section>


</template>

<script>
import Logo from "../components/Logo";
import axios from 'axios'
// let user = require('../api/users.js')
export default {
  components : {
    Logo : Logo,
  },
  //   async fetch ({ store, params }) {
  //   let { data } = await axios.get('http://localhost:8080/current-user')
  //   console.log('data :', data);
  //   // store.commit('setStars', data)
  // },
// async asyncData({$axios}) {
//         const data = await $axios.$get('http://localhost:8080/users/13')
//         let user = data.response
//         return {user}
//   },
  
  // async fetch ({ store, params }) {
  //   let { data } = await axios.get('http://localhost:8080/users')
  //   store.commit('setStars', data)
  // },
    //   async user2({ $axios }){
    //       try {
    //     const response = await $axios.$get('http://localhost:8080/users/4')
    //     var user2 = response.result
    //     return { user2 }
    // } catch (error) {
    // }
    // },
  //     async asyncData({ $axios }) {

  //   try {
  //       const response = await $axios.$get('http://localhost:8080/users')
  //       var tung = response.result
  //       return { tung }
  //   } catch (error) {
  //   }
  // },

    computed: {
      // Lấy mã tooken user trong cookie
      
      // user_id : this.$cookie.get('Bearer') //document.cookie.slice((document.cookie.indexOf('Bearer') + 7 ))
  },
  mounted (){
    var token =   this.$cookie.get('Bearer')
    this.$store.dispatch('token', token)

    var user_id =   this.$cookie.get('user_id')
    this.$store.dispatch('user_id', user_id)
  },
  data () {
    return {
      image: '../images/product/sp1.jpg',
      // isfixed: false,
        activeIndex: '1',
        activeIndex2: '1',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        stt : [
          {name : '1'},
          {name: '2'},
          {name: '3'},
          {name: '4'}
        ]
      };
  },
  methods: {
    async  deleteuser(id, index){
      try {
        const response = await this.$axios.$delete(`http://localhost:8080/users/${id}`)
        this.$store.dispatch('deleteuser', index)
      } catch (error) {
        console.log('err :');
      }
    },
    increa(){
      this.$store.commit('increment')
    },
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    doneac (todo) {
      this.$store.commit('todos/toggle', todo)
    }
  }
}
</script>

<style>

.parallax {
  /* The image used */
  background-image: url("../static/images/background/Red-Shoes.jpg");

  /* Set a specific height */
  min-height: 200px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.contaner{
  position: relative;
  content: "";
  clear: both;
  display: table;
  width: 100%;
}
.sideContaner {
    height: 1000px;
    background-color: #1e43e930;
    box-sizing: border-box;
    padding: 5px;
    
}

.sideContaner.contanerLeft {
    width: 200px;
    position: absolute;
    top: 0px;
    z-index: 4;
    background-color: #bbacac7a;
}

.sideContaner.contanerRight {
    width: 100%;
    padding-left: 200px;
}
.sideContaner.fixed{
  position: fixed;
  top: 60px;
}
.galaryImage{
  height: 100px;
}
.galaryImage:hover{
  cursor: pointer;
}
.galaryImage img {
  height: 100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  .el-carousel__container{
    height: 650px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
     background-color: #27ae61;
   }
   .best-seller h3{
    position: absolute;
    top: 40%;
    left: 5%;
    color: white;
   }
   .valentine img{
     width: 100%;
   }
 
   .valentine {
     text-align: center;
   }
</style>