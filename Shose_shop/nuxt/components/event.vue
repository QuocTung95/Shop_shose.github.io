<template>
    <div class="space-section-top">
        <div style="margin-top:10px;" class="space-text">
            <!-- <h3 class="space-left">VALENTINE VÀ NHỮNG CHUYẾN ĐI CÙNG NHAU</h3> -->
            </div>
            <div class="valentine">
                <div class="text-title">NĂNG ĐỘNG CÙNG NHỮNG CHIẾC GIÀY THỂ THAO</div>
            <img src="../static/images/background/sport_activiti.jpg" alt="">
            <div class="text">
                <h3 class="space-text">MỘT CHIẾC GIÀY TỐT SẼ HỖ TRỢ BẠN LÀM MỌI VIỆC</h3>
                <p class="space-text">Hãy khám phá chiếc giày giành cho bạn nào</p>
            </div>
                <nuxt-link to="./storeShose">
                <button style="height: 45px;" class="main-button">VÀO SHOP <i style="transform: rotateY(180deg)!important;" class="el-icon-back forward"></i></button>
                </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .valentine img{
    width: 100%;
    }

    .valentine {
        text-align: center;
    }
</style>