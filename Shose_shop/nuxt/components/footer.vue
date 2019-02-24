<template>

<div id="wrap-footer">
    <div class="footer-inside">
        <el-row class="row-footer">
        <el-col :span="8" class="col-footer child-center help">
            <h3>Trợ giúp</h3>
            <p>Trạng thái vận chuyển</p>
            <p>Phương thức thanh toán</p>
            <p>Đổi trả</p>
            <p>Cộng tác viên</p>
        </el-col>


        <el-col :span="8" class="col-footer child-center contact">
            <h3>Liên hệ</h3>
            <ul class="clearfix">
                <li><ion-icon name="logo-instagram"></ion-icon></li>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-facebook"></ion-icon></li>
                <li><ion-icon name="logo-youtube"></ion-icon></li>
            </ul>
            <p >quoctung.haui@gmail.com</p>
            
        </el-col>

        <el-col :span="8" class="col-footer child-center">
                <h3>Hãy để chúng tôi gửi thông tin cho bạn</h3>
                <div>
                    <el-input placeholder="Email" ></el-input>
                </div>
                <div>
                    <el-button class="mybtn">Đăng ký</el-button>
                </div>
        </el-col >

        </el-row>
        
    </div>



</div>

</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style>
#wrap-footer{
    /* background-color: rgba(30,67,233,0.18824); */
        /* background-color: #111; */
    height: 300px;

    position: relative;
    overflow: hidden;
}
#wrap-footer::before {
    content: "";
    position: absolute;
    z-index: -1;
    background-image: url('../static/images/background/Footer-Background-ocean.jpg');
    background-size: cover;
    -webkit-transform: translateY(-145px);
    transform: translateY(-145px);
    width: 100%;
    height: 500px;

}
.footer-inside{
    height: 100%;
    padding: 0px 100px;
}
.row-footer, .col-footer {
    height: 100%;
}

.footer-inside h3, .footer-inside p {
    text-align: center;
}
.text-center{
    color: #fff;
}
ul.clearfix {
    width: 100%;
    margin-bottom: 25px;
}
.col-footer h3 {
    margin-bottom: 30px;

}
.col-footer p {
    margin-bottom: 15px;
    font-family: 'Lora',Georgia,"Times New Roman",serif;
}

.contact p  {
    font-family: 'Lora',Georgia,"Times New Roman",serif;
    color: #968e5f
}
.help p {
    font-family: 'Lora',Georgia,"Times New Roman",serif;
    color: #968e5f
}
.clearfix li {
    list-style: none;
    float: left;
    width: 25%;
    color: #968e5f;
    display: flex;
    justify-content: space-around;
}
.mybtn{
    color: #968e5f;
    border: 1px solid #968e5f;
    margin-top: 15px;
}
.el-input__inner{
        border: 1px solid #968e5f;
        color: #968e5f;
}

</style>
