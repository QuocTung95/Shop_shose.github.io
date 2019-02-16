<template>
  <div>
    <div id="modal-login">
    <el-form  ref="dynamicValidateForm" label-width="120px" class="demo-dynamic" action="/login" method="post">
    <el-form-item
        prop="email"
        label="Email"
        :rules="[
        { required: false, message: 'Please input email address', trigger: 'blur' },
        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }]"
    >
        <el-input type="email" name="password" autocomplete="on" v-model="email"></el-input>
    </el-form-item>

            <el-form-item label="Password">
                <el-input type="password" name="password" v-model="password" autocomplete="on"></el-input>
            </el-form-item>
            <el-button @click="register()" type="primary" >Register</el-button>
            <el-button @click="login()" type="primary" >Login</el-button>
            <el-button style="left: 70%;" @click="logout()" type="primary" >logout</el-button>

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
                password: '',
                email: '',
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
        mounted (){
             let user = JSON.parse(localStorage.getItem('user'));
            console.log('object :', user);
        },
    
    methods: {
    async  register(){
      try {
        const response = await this.$axios.$post("http://localhost:8080/register", {
            name:'tung',
            age:'',
            email:this.email,
            phone: '',
            password: this.password
        })
        if(response.status){
            const cart = await this.$axios.$post("http://localhost:8080/addcart", {
            user_id : response.result.id,
            product_id : [0]
        })
        } else {
            this.$message({
            type: 'error',
            message: response.message
        });
        }
    } catch (error) {
        throw Error(error.message)
    }
    },
    async  login(){
    try {
        const user = await this.$axios.$post("http://localhost:8080/login",{
            email : this.email,
            password: this.password
        })
        if(user.status === true){
            this.$message({
            type: 'success',
            message: 'Login Success'
        });
            // this.$axios.setHeader('x-access-token', `${user.token}`)
            // Set token và user_id cho user vào store và cooki trong vòng 1 ngày
            // set
            this.$cookie.set('Bearer', `${user.token}`, 1);
            this.$cookie.set('user_id', `${user.id}`, 1);
            //get
            let token =   this.$cookie.get('Bearer')
            let user_id =   this.$cookie.get('user_id')
            // dispatch store
            this.$store.dispatch('token', token)
            this.$store.dispatch('user_id', user_id)
        }
        else{
            this.$message({
            type: 'error',
            message: 'Email or password'
        });
        }

    } catch (error) {
        throw Error(error.message)
    }
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
