<template>
  <div>
      <div id="modal-login">
        <el-form :label-position="right" label-width="100px"  action="/login" method="post">
        <el-form-item label="Email">
            <el-input type="text" name="uername" v-model="email" autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" name="password" v-model="password" autocomplete="on"></el-input>
        </el-form-item>
        <el-button @click="register()" type="primary" >Register</el-button>
        <!-- <el-button @click="login()" type="primary" >Register</el-button> -->
    </el-form>
      </div>


  </div>

</template>

<script>
  export default {

        data() {
            
            return {
                right: 'right',
                email: '',
                password: '',
            }
        },
        watch: {
            email (value){
                console.log(value)
            },
            password (value){
                console.log(value)
            }
        },
    
    methods: {
    async  register(){
      try {
        const user = await this.$axios.$post("http://localhost:8080/user", {
            name:'',
            age:'',
            email:this.email,
            phone: '',
            password: this.password
        })
      } catch (error) {
        throw Error(error.message)
      }
    },
    async  login(){
      try {
        const user = await this.$axios.$post("http://localhost:8080/login")
      } catch (error) {
        throw Error(error.message)
      }
    },

  }
  }
</script>
<style>
.el-form-item{
    width: 80%;
}
#form-register{
    padding-top: 25px;
    transform: translateX(-50%);
    z-index: 5;
    left: 50%!important;
    width: 70%;
    background-color: #456c82ad;
    height: 206px;
    border-radius: 3%;
    display: none;
}
.el-button--primary{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}


</style>
