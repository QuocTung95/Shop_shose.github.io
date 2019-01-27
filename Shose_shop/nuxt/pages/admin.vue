<template>
<section>

    <el-form  style = "padding-top: 70px;" ref="ruleForm2" label-width="120px" class="demo-ruleForm" method="post" enctype="multipart/form-data">
    <el-form-item label="name" >
        <el-input id="name" type="text"  autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="type_id" >
        <el-input id="type_id" type="text"  autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="price" >
        <el-input id="price" type="text"  autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="description" >
        <el-input id="description" type="text"  autocomplete="off"></el-input>
    </el-form-item>


    <el-form-item label="gender">
        <el-input id="gender" type="text"  autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-input type="hidden" name="msgtype" value="2"></el-input>
        <el-input id="imgUpload" type="file" name="images"></el-input>
        <el-input type="hidden" name="msgtype" value="2"></el-input>

        <!-- <form  >
        <input type="hidden" name="msgtype" value="2"/>
        <input type="file" name="images" />
        <input type="submit" value="Upload" />
    </form> -->
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
    }
    },
    methods: {
        async uploadProduct (){
            try {
                const product = await this.$axios.$post('http://localhost:8080/upload', {
                name: document.getElementById('name').value,
                type_id: document.getElementById('type_id').value,
                price : document.getElementById('price').value,
                description : document.getElementById('description').value,
                gender : document.getElementById('gender').value,
                image : document.getElementById('imgUpload').files[0].name
                })
            } catch (error) {
                throw Error(error.message)
            }
        },
    },
}
</script>

<style>
    
</style>
