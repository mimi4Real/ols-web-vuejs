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
      <div class="ols-nav__nav-avatar"></div>
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
          route: '/view/signin'
        }, {
          name: '训练营',
          code: 'sd',
          route: '/view/listing'
        }, {
        name: '任务卡',
        code: 'cards',
        route: '/view/camp'
      }],
      active: 'listing'
      }
    }
  }
</script>

<style>
  .ols-nav__nav {
    height: 60px;
    box-shadow: 0 2px 4px 0 rgba(129, 129, 129, 0.5);
    padding-left: 30px;
    padding-right: 30px;
  }

  .ols-nav__nav-log{
    margin-bottom: 10px;
    margin-right: 65px;
  }

  .ols-nav__nav-avatar {
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 10px;
    margin-right: 10px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("./img/oval.png");
  }

  .ols-nav__menu{
    border: transparent;
    display: inline-block;
  }

  .ols-nav__menu.el-menu--horizontal>.el-menu-item.is-active{
    border-width: 4px;
  }

  .ols-nav__menu .el-menu-item{
    font-size: 18px;
  }

  .ols-nav__menu a{
    text-decoration: none;
  }
  .ols-container{
    width: 1140px;
    margin: 0 auto;
  }
</style>
