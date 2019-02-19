<template>
<section>

    <el-form  style = "padding-top: 70px;" ref="ruleForm2" label-width="120px" class="demo-ruleForm" method="post" enctype="multipart/form-data">
    <el-form-item label="name" >
        <el-input id="name" type="text"  autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="type_id" >
        <!-- <el-input id="type_id" type="text"  autocomplete="off"></el-input> -->
        <el-radio v-model="type_id" label="1">Converse</el-radio>
        <el-radio v-model="type_id" label="2">Nike</el-radio>
        <el-radio v-model="type_id" label="3">Bitits</el-radio>
        <el-radio v-model="type_id" label="4">Adidas</el-radio>
    </el-form-item>
    <el-form-item label="price" >
        <el-input id="price" type="text"  autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="description" >
        <el-input id="description" type="text"  autocomplete="off"></el-input>
    </el-form-item>


    <el-form-item label="gender">
        <el-radio v-model="gender" label="true">Nam</el-radio>
        <el-radio v-model="gender" label="false">Nữ</el-radio>
    </el-form-item>
    <el-form-item>
      Hình ảnh chính :  <el-input id="imgUpload" type="file" name="images"></el-input>
    </el-form-item>

    <el-form-item>
      Hình chi tiết  <input id="arrImage" type="file" name="images" multiple>
    </el-form-item>

    <el-form-item>
        <el-button @click="uploadProduct()" type="primary" >Submit</el-button>
        <el-button >Reset</el-button>
    </el-form-item>
</el-form>

</section>

</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            type_id : '',
            gender : '',
            fileList: []
    }
    },
    methods: {
        async uploadProduct (){
            try {
                let arrImage = document.getElementById('arrImage')
                let sub_imageName = []
                for (let i in arrImage.files){
                    sub_imageName.push(arrImage.files[i].name)
                    // console.log('i.file.File :', arrImage.files[i].name);
                }
                const product = await this.$axios.$post('http://localhost:8080/upload', {
                name: document.getElementById('name').value,
                type_id: this.type_id,
                price : document.getElementById('price').value,
                description : document.getElementById('description').value,
                gender : this.gender,
                image : document.getElementById('imgUpload').files[0].name,
                sub_image : sub_imageName
                })
                if(product){
                    this.$message({
                    type: 'success',
                    message: 'Upload thành công'
                });
                }
            } catch (error) {
                throw Error(error.message)
            }
        },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file.name);
        return file
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`xóa ${ file.name }？`);
      }
    },
}
</script>

<style>
    
</style>
