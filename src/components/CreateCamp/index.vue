<template>
  <el-form :model="form" :rules="rules" ref="form" Id="form">
    <span Id="returnLink" @click="goBack()">返回</span>
    <div Id="titleContainer">
      <span>创建训练营</span>
    </div>
    <el-form-item label="标题" class="inputItem" prop="title">
      <el-col :span="24">
        <el-input v-model="form.title" Id="titleInput"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="描述" prop="desc" class="inputItem">
      <el-col :span="24">
        <el-input type="textarea" v-model="form.desc" maxLength="300" Id="descInput"></el-input>
      </el-col>
    </el-form-item>
    <div Id="formFooter">
      <el-button type="text" @click="goBack()">取消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')" class="saveButton">保存</el-button>
    </div>
  </el-form>
</template>

<script>
  import api from '@/api'

  export default {
    data() {
      return {
        form: {
          title: '',
          desc: ''
        },
        rules: {
          title: [
            {validator: (rule, value, callback) => {
              if (!value){
                callback(new Error('请输入标题'));
              }
              callback();
            }, trigger: 'blur'}
          ],
          desc: [
            {maxLength: 300, message: '描述不能超过300个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs.form.validate((valid) => {
          if (valid){
            api.postCamp({...this.form}).then((res) => {
              if (res.status === 201){
                return res.text();
              }
              return Promise.reject(res.text());
            }).then((text) => (text === 'success' ? Promise.resolve() : Promise.reject())).then((res) => {
              this.$message.success('创建成功');
              this.$router.go(-1);
            }).catch((res) => {
              this.$message.error('标题已被使用');
            });
          }
        });
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style>
  .inputItem {
    display: flex;
  }

  .inputItem > .el-form-item__content {
    flex: 1;
  }

  #form {
    margin-left: 50px;
    margin-top: 30px;
    width: 500px;
  }

  #returnLinkContainer {
    width: 120px;
    text-align: right;
  }

  #returnLink {
    width: 36px;
    height: 25px;
    font-family: PingFangSC;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #00b4c5;
    cursor: pointer;
  }

  #titleContainer {
    padding: 25px 0;
  }

  #titleContainer > span {
    width: 90px;
    height: 25px;
    font-family: PingFangSC;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }

  #titleInput {
    height: 40px;
    border-radius: 4px;
    border: solid 1px #979797;
  }

  .saveButton{
    border-radius: 5px;
    color: #fff;
    background-color: #00b4c5;
    border-color: #00b4c5;
  }
  .saveButton:focus, .saveButton:hover {
    background: #00b4c5;
    border-color: #00b4c5;
    color: #fff;
  }

  #descInput {
    height: 156px;
    border-radius: 4px;
    border: solid 1px #979797;
    resize: none;
  }

  #formFooter {
    text-align: right;
  }
</style>
