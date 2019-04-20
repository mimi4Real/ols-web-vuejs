<template>
  <div class="ols-nav">
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      active-text-color="#00b4c5">
      <el-menu-item v-for="(nav, index) in navs" key="nav.route" :index="index">
        <router-link :to="nav.route">{{nav.name}}</router-link>
      </el-menu-item>

    </el-menu>
    <div class="ols-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navs: [{
          name: '账户',
          route: '/view/listing'
        }, {
          name: '训练营',
          route: ''
        }, {
        name: '任务卡',
        route: ''
      }],
      activeIndex: 2

      }
    }
  }
</script>

<style scoped>
  .ols-nav__nav-item{
    flot: left;
    list-style: none;
  }
.ols-container{
  width: 1140px;
  margin: 0 auto;;
}

</style>
