<template>
        <div class="sideContaner contanerLeft" id="leftside" v-bind:class="{ fixed: isfixed}">
            <p>hihi</p>
            <p>haha</p>
        </div>

</template>
<script>

export default {

    mounted(){
    this.handleScroll()
    },
    data() {
        return {
            isfixed: false,
        }
    },
    methods: {
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
</style>