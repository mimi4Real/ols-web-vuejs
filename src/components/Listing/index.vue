<template>
  <div class="ols-listing">
    <div class="ols-listing__search-area">
      <el-input style="width: 348px;margin-right: 17px"></el-input>
      <el-button class="ols-button--primary">搜索</el-button>
    </div>
    <el-row :gutter='20' class="ols-listing__card">
      <el-col :span="8" class="ols-listing__card-col">
        <div class="ols-listing__card-item" @click="handleAdd">
          <div class="ols-listing__card-add">
            <img src="./img/add.png">
            <p>创建训练营</p>
          </div>
        </div>
      </el-col>
      <el-col v-for="card in data" :key="card.id" :span="8" class="ols-listing__card-col" @click.native="handleShowDetail(card)">
        <div class="ols-listing__card-item">
          <i @click="handleDelete(card.id)" class="el-icon-close ols-listing__card-item-close"></i>
          <p class="card-item__title">{{card.title}}</p>
          <p class="card-item__description">{{card.desc}}</p>
          <p class="card-item__date">{{card.startDate + '开营'}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        data: [],
      }
    },
    created() {
      this.data = [{
        id: 1,
        title: '敏捷训练营',
        desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
        startDate: '2019-3-25'
      }, {
        id: 2,
        title: '敏捷训练营',
        desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
        startDate: '2019-3-25'
      }, {
        id: 3,
        title: '敏捷训练营',
        desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
        startDate: '2019-3-25'
      }, {
        id: 4,
        title: '敏捷训练营',
        desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
        startDate: '2019-3-25'
      }]
    },
    methods: {
      handleAdd() {
        this.$router.push('/view/createCamp');
      },

      handleShowDetail(card){
        this.$router.push(`/view/camp/${card.id}`);
      },

      handleDelete(cardId){
        //todo 数据库操作
        this.$confirm('是否确认删除词训练营？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //todo
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          /*this.$message({
            type: 'info',
            message: '已取消删除'
          });*/
        });
      }
    }
  }
</script>

<style>
  .ols-listing {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .ols-listing__search-area {
    margin-bottom: 15px;
  }
  .ols-listing__card-col{
    padding: 15px 20px;
  }
  .ols-listing__card-item {
    position: relative;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    padding: 20px 35px 20px 30px;
    height: 160px;
    cursor: pointer;
    color: #686868;
  }
  .card-item__title {
    font-size: 18px;
    color: #00b4c5;
    margin-top: 0;
    margin-bottom: 26px;
  }
  .card-item__description{
    margin-top: 0;
    margin-bottom: 9px;
  }
  .card-item__date{
    margin: 0;
  }
  .ols-listing__card-add {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    margin-bottom: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .ols-listing__card-add > p{
    margin-bottom: 0;
  }

  .ols-listing__card-item-close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 15px;
  }

  .ols-button--primary{
    border-radius: 5px;
    color: #fff;
    background-color: #00b4c5;
    border-color: #00b4c5;
  }
  .ols-button--primary:focus, .ols-button--primary:hover {
    background: #00b4c5;
    border-color: #00b4c5;
    color: #fff;
  }
</style>
