<template>
  <div class="ols-view">
    <div class="ols-nav__nav">
      <img class="ols-nav__nav-log" src="./img/thoughtworks-logo.png">
      <el-menu
        mode="horizontal"
        class="ols-nav__menu"
        :default-active="active"
        active-text-color="#00b4c5">
        <el-menu-item v-for="(nav, index) in navs" :key="nav.code" :index="nav.code">
          <router-link :to="nav.route">{{nav.name}}</router-link>
        </el-menu-item>

      </el-menu>
    </div>

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
          code: 'listing',
          route: '/view/listing'
        }, {
          name: '训练营',
          code: 'sd',
          route: '/view/listing'
        }, {
        name: '任务卡',
        code: 'cards',
        route: '/view/listing'
      }],
      active: 'listing'
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
