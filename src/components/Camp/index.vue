<template>
  <el-container class="camp-detail-wrap">
    <el-main class="camp-detail-main">
      <div class="camp-detail-back camp-detail-item">
        <span>返回</span>
      </div>
      <div class="camp-detail-title camp-detail-item">
        <span>{{title}}</span>
      </div>
      <div class="camp-detail-body camp-detail-item">
        <div class="camp-detail">
          <div class="camp-detail-desc">{{desc}}</div>
          <div class="camp-detail-task-wrap">
            <el-card class="task-item" v-for="(task, index) in listData" :key="index" :class="index === 0 ? 'active' : ''">
              <i class="el-icon-close card-close"></i>
              <div class="task-card-body">
                <p class="task-card-title">{{task.title}}</p>
                <div class="task-card-desc">{{task.desc}}</div>
                <p class="task-card-date">{{task.creatDate}}创建</p>
              </div>
            </el-card>
          </div>
        </div>
        <ul class="task-userlist">
          <li class="task-user" v-for="(user, index) in userList" :key="index">
            <img :src="user.logo"  class="user-logo" />
            <span>{{user.name}}</span>
            <span>{{user.email}}</span>
            <span>{{user.score}}</span>
          </li>
        </ul>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { getCampDetail } from '@/api'
export default {
  data() {
    return {
      campId: '',
      title: '敏捷训练营',
      desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
      listData: [{
        title: '任务卡1',
        desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
        creatDate: '2018-11-15'
      },{
        title: '任务卡2',
        desc: '了解数据和基本的EDA、数据清洗、搭建和选择统计学模型、模型和数据的诊断。',
        creatDate: '2018-11-15'
      },{
        title: '任务卡3',
        desc: '了解数据和基本的EDA、数据清洗、搭建和选择统计学模型、模型和数据的诊断。',
        creatDate: '2018-11-15'
      },{
        title: '任务卡4',
        desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
        creatDate: '2018-11-15'
      },{
        title: '任务卡5',
        desc: '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。',
        creatDate: '2018-11-15'
      }],
      userList: [{
        name: '任刚',
        email: 'k.xuvfytfke@gmail.com',
        score: 97
      }, {
        name: '李超',
        email: 'j.rfvwuvc@gmail.com',
        score: 35
      }, {
        name: '李超',
        email: 'j.rfvwuvc@gmail.com',
        score: 45
      }, {
        name: '李超',
        email: 'j.rfvwuvc@gmail.com',
        score: 89
      }, {
        name: '李超',
        email: 'j.rfvwuvc@gmail.com',
        score: 79
      }, {
        name: '李超',
        email: 'j.rfvwuvc@gmail.com',
        score: 35
      }, {
        name: '李超',
        email: 'j.rfvwuvc@gmail.com',
        score: 35
      }, {
        name: '李超',
        email: 'j.rfvwuvc@gmail.com',
        score: 35
      }]
    }
  },
  created() {
    const url = require('../../assets/user1.png');
    for (const user of this.userList) {
      user.logo = url;
    }
    this.campId = this.$route.params.campId;
    // getCampDetail(this.campId).then((res) => {
    //   console.log(res);
    // });
  },
  mounted() {
    
  }
}
</script>
<style>
.camp-detail-main {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
.camp-detail-item {
  margin-bottom: 30px;
}
.camp-detail-back {
  font-size: 18px;
  color: #00b4c5;
  cursor: pointer;
}
.camp-detail-title {
  font-size: 18px;
}
.camp-detail-body {
  display: flex;
}
.camp-detail-body .camp-detail {
  width: calc(100% - 300px);
}
.camp-detail-desc {
  width: 480px;
  color: #686868;
}
.camp-detail-task-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 70px;
}
.task-item {
  position: relative;
  width: calc(50% - 20px);
  margin-top: 30px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  color: #686868;
  padding: 20px 35px 30px;
  box-sizing: border-box;
}
.card-close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 15px;
  cursor: pointer;
}
.card-close:hover {
  transform: rotate(360deg);
  transition: transform 0.5s linear;
}
.task-item .el-card__body {
  padding: 0;
}
.task-card-desc {
  height: 80px;
  padding: 25px 0 10px;
}
.task-card-title {
  font-size: 18px;
  color: #00b4c5;
}
.task-item.active{
  box-shadow: 0 0 10px 0 #00b4c5;
}
.task-userlist {
  width: 300px;
  display: inline-flex;
  flex-direction: column;
}
.task-user {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  width: 100%;
  height: 40px;
  padding-bottom: 20px;
  font-size: 14px;
  color: #686868;
}
.user-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

