<template>
  <div class="ols-view">
    <div class="ols-nav__nav">
      <img class="ols-nav__nav-log" src="./img/thoughtworks-logo.png">
      <el-menu
        mode="horizontal"
        class="ols-nav__menu"
        :default-active="active"
        active-text-color="#00b4c5">
        <el-menu-item v-if="nav.meta.showMenu" v-for="nav in navs" :key="nav.path" :index="nav.path">
          <router-link :to="'/view/' + nav.path">{{nav.meta.title}}</router-link>
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
  import {navs} from '../../router/index';

  export default {
    data() {
      const route = this.$route;
      return {
        navs: navs,
        active: route.meta.belong
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
    display: block;
    text-decoration: none;
  }
  .ols-container{
    width: 1140px;
    margin: 0 auto;
  }
</style>
