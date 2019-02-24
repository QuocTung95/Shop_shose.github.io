<template>
        <div class="sideContaner contanerLeft" id="leftSide" v-bind:class="{ fixed: isfixed}">
          <ul>
            <li><h3>Giới tính</h3>  
              <ul >
                <li @click="sortMen()">Nam</li>
                <li @click="sortGirl()">Nữ</li>
              </ul>
            </li>


            <li> <h3>Thương hiệu</h3>
              <ul v-for="(brand , index) in brands" :key="index">
                  <li @click="getProuctByBrand(brand.id)">{{brand.name}}</li>
              </ul>
            </li>
          </ul>
        </div>

</template>
<script>
import axios from 'axios'
export default {

    data() {
        return {
            isfixed: false,
        }
    },
    mounted(){
      this.handleScroll()
    },
    computed: {
      brands () {
        return this.$store.state.brands
      },
    },
    methods: {
        handleScroll(evt, el) {
          
        window.addEventListener("scroll", () => {
          let element = document.getElementById("leftSide")
          let body = document.getElementById("rightside")
          if(body.getBoundingClientRect().top < 60){
            this.isfixed = true
          }
          if(body.getBoundingClientRect().top > 60){
            this.isfixed = false
          }
        })
    },

    async sortMen() {
        try {
          const data = await this.$axios.$get('http://localhost:8080/products_boy')
          this.$store.dispatch('products', data.response)
      } catch (error) {
        throw Error(error.message)
      }
    },
    async sortGirl() {
        try {
          const data = await this.$axios.$get('http://localhost:8080/products_girl')
          this.$store.dispatch('products', data.response)
      } catch (error) {
        throw Error(error.message)
      }
    },
    async getProuctByBrand (id) {
      try {
        const data = await this.$axios.$get(`http://localhost:8080/brands/${id}`)
        this.$store.dispatch('products', data.data.products)

      } catch (error) {
        throw Error(error.message)
      }
    }
    },
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
    /* background-color: #1e43e930; */
    box-sizing: border-box;
    padding: 5px;
    
}

.sideContaner.contanerLeft {
    width: 200px;
    z-index: 4;
    background-color:white;
}

.sideContaner.contanerRight {
    width: 100%;
    padding-left: 200px;
    padding-right: 30px;
}
.sideContaner.fixed{
  position: fixed;
  top: 60px;
  padding-top: 5px;
}
#leftSide > ul {
    padding-left: 30px;
}
#leftSide ul li {
    list-style: none;
    padding-bottom: 5px;
    padding-top: 9px;
}
#leftSide ul li > ul>li:hover {
  cursor: pointer;
  color: blue;
}
</style>