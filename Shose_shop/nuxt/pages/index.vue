<template>
<section>
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="../static/images/banner1.jpg" alt="">
    </el-carousel-item>
    </el-carousel>

    <Logo />
<div class="contaner">
  <div class="sideContaner contanerLeft" id="leftside" v-bind:class="{ fixed: isfixed}">
    <p>hihi</p>
    <p>haha</p>
  </div>

  <!-- Phần thân show sản phẩm -->
  <div class="sideContaner contanerRight" id="rightside">
    <el-row :gutter="5">
      <el-col :span="6" v-for="(i, index) in products" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <nuxt-link :to="'./detailProduct/' + i.id">
            <img :src="`/images/product/${i.image}.jpg`" alt="">
          </nuxt-link>
          
          <div style="padding: 14px;">
            <span>{{i.description}}</span>
            <div class="bottom clearfix">
              <time class="time">time</time>
              <el-button type="text" class="button">Operating button</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>



  </div>
</div>

<!-- <p v-scroll="300">Stick me 70px from the top of the page</p> -->




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

async fetch ({ store }) {
    let  {data}  = await axios.get('http://localhost:8080/products')
    store.commit('products', data.response)
  },
  mounted(){
      this.handleScroll()
          },



// async asyncData({$axios}) {
//         const data = await $axios.$get('http://localhost:8080/users/13')
//         let user = data.response
//         console.log( user);
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
    //     console.log(user2)
    //     return { user2 }
    // } catch (error) {
    //   console.log('error');
    // }
    // },
  //     async asyncData({ $axios }) {

  //   try {
  //       const response = await $axios.$get('http://localhost:8080/users')
  //       var tung = response.result
  //       return { tung }
  //   } catch (error) {
  //     console.log('error');
  //   }
  // },

    computed: {
    todos () {
      return this.$store.state.todos.list
    },
    counter (){
      return this.$store.state.counter
    },
    products (){
      return this.$store.state.products
    }
  },
  data () {
    return {
      image: '../images/product/sp1.jpg',
      isfixed: false,
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
        this.$store.commit('deleteuser', index)
      } catch (error) {
        console.log('err :');
      }
    },
    handleScroll(evt, el) {
        window.addEventListener("scroll", () => {
          let element = document.getElementById("leftside")
          let body = document.getElementById("rightside")
          if(body.getBoundingClientRect().top < 60){
            this.isfixed = true
          }
          if(body.getBoundingClientRect().top > 60){
            this.isfixed = false
          }
        })
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
</style>