<template>
  <div id="wrap">
 <!-- HORIZONTAL -->
        <div id="nav_horizontal" >
            <ul>
                <li><a href=''>Home</a></li>
                <li>
                    <a href='javascript::void(0)' class="none">
                        Products
                        <i class="fa fa-caret-down"></i>
                    </a>
                    <ul>
                        <li>
                            <a href="">
                                Product1
                                <i class="fa fa-caret-right right"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="">Product1Product1Prod uct1Product1Produc t1Product1Product1Product1Product1  </a>
                                    <ul>
                                        <li><a href="">Product1</a></li>
                                        <li><a href="">Product2</a></li>
                                        <li><a href="">Product3</a></li>
                                        <li><a href="">Product4</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Product2</a></li>
                                <li><a href="">Product3</a></li>
                                <li><a href="">Product4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Product2</a>
                            <ul>
                                <li>
                                    <a href="">Product2</a>
                                    <ul>
                                        <li><a href="">Product1</a></li>
                                        <li><a href="">Product2</a></li>
                                        <li><a href="">Product3</a></li>
                                        <li><a href="">Product4</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Product2</a></li>
                                <li><a href="">Product3</a></li>
                                <li><a href="">Product4</a></li>
                            </ul>
                        </li>
                        <li><a href="">Product3</a></li>
                        <li><a href="">Product4</a></li>
                    </ul>
                </li>
                <li><a href=''>Services</a></li>
                <li class="info" style="width: 55%;"><a style="float:right;" href='javascript:void(0)' @click="showLogin()">Register</a></li>
            </ul>
        </div>

        <loginModel v-bind:class="{ showLogin: isLogin}"  id="form-register"/>


    <nuxt/>


      <div class="footer-page">FOOTTER HERE</div>

  </div>
</template>

<script>
import loginModel from "../components/login";
  export default {
    components : {
      loginModel : loginModel
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isLogin: false,
      };
    },
    methods: {
      showLogin () {
        this.isLogin = true
        console.log('ok :', );
      }
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
  display: block;
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
  text-decoration: none;
  color: #ffffff;
  padding: 20px 30px;
  display: inline-block;
}
#nav_horizontal ul li:hover > ul {
  display: block;
  background-color: #333333;
}
#nav_horizontal > ul > li {
  float: left;
  width: 15%;
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
</style>
