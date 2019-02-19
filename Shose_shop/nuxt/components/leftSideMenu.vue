<template>
        <div class="sideContaner contanerLeft" id="leftside" v-bind:class="{ fixed: isfixed}">
          <ul>
            <li><h3>Giới tính</h3> 
              <ul>
                <li>Nam</li>
                <li>Nữ</li>
              </ul>
            </li>


            <li> <h3>Thương hiệu</h3>
              <ul>
                  <li>Nike</li>
                  <li>Converse</li>
                  <li>Bitits</li>
                  <li>Adias</li>
              </ul>
            </li>
          </ul>
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
#leftside ul {
    padding-left: 10px;
}
#leftside ul li {
    list-style: none;
    padding-bottom: 5px;
    padding-top: 9px;
}
</style>