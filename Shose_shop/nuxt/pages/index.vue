<template>
<section id="index">
    <!-- <el-carousel class="banner"  :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="/images/banner1.jpg" alt="">
    </el-carousel-item>
    </el-carousel> -->
    <div>
        <video width="100%" height="550px" autoplay muted loop id="myVideo">
          <source src="https://nikevideo.nike.com/72451143001/201902/1812/72451143001_6001924534001_6001915084001.mp4" type="video/mp4">
        </video>
    </div>

    <!-- <div>
      <video width="100%" height="650px" autoplay loop >
        <source src="https://nikevideo.nike.com/72451143001/201902/1812/72451143001_6001924534001_6001915084001.mp4" type="video/mp4">
      </video>
    </div> -->
    <Logo />

        <!-- slide sản phẩm -->
       <sildeHotProduct/>
    <!-- Hot trend product -->
    <div class="text-title">HOT NHẤT TRONG TUẦN</div>
    <hotTrendProduct/>

        <!-- parallax -->
    <div class="parallax"></div>

     <!-- Event in month -->
     <event/>
         <!-- Service -->
     <!-- <service /> -->
     <!-- Footer here -->
     <!-- <footerEnd/> -->
</section>


</template>

<script>
import Logo from "../components/Logo";
import sildeHotProduct from "../components/hotSlidePproduct"
import axios from 'axios'
import service from '../components/service'
import event from '../components/event'
import footerEnd from '../components/footer'
import hotTrendProduct from '../components/hotTrend'
export default {
  components : {
    Logo : Logo,
    sildeHotProduct,
    service,
    hotTrendProduct,
    event,
    footerEnd,
  },
    async fetch ({ store, params }) {
    let { data } = await axios.get('http://localhost:8080/hotProduct')
    console.log('hotproduct :', data.response);
    store.dispatch('hotProducts', data.response)
  },
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

  },
  mounted (){
    var token =   this.$cookie.get('Bearer')
    this.$store.dispatch('token', token)

    var user_id =   this.$cookie.get('user_id')
    this.$store.dispatch('user_id', user_id)
  },
  data () {
    return {
      banners: [
          '/1.jpg',
          '/2.jpg',
          '/3.jpg'
        ],
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        },
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
  }
}
</script>

<style>

.parallax {
  /* The image used */
  background-image: url("../static/images/background/paralax.jpg");

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
    /* background-color: #1e43e930; */
    box-sizing: border-box;
    padding: 5px;
    
}

.sideContaner.contanerLeft {
    width: 200px;
    /* background-color: #bbacac7a; */
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
  .banner .el-carousel__container{
    height: 650px!important;
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
   #myVideo {
  width: 100%    !important;
  height: auto   !important;
}

.el-carousel__indicator{
  /* background-image: url('../static/images/background/Footer-Background-ocean.jpg') */
}
</style>