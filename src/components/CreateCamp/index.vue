<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="120px">
    <el-form-item label="标题" prop="userName">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="描述" prop="password">
      <el-input type="textarea" v-model="form.description"></el-input>
    </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
  </el-form>
</template>

<script>
  import api from '@/api'

  export default {
    data() {
      return {
        form: {
          title: '',
          description: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          description: [
            {maxLength: 300, message: '描述不能超过300个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        debugger
        api.postCamp();
      }
    }
  }
</script>

<style>
</style>
