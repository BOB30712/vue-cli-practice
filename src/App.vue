<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/dashborder/productlist">後台登入</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/UserBoard/UserCart">商店</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <div class="container-fluid" style="margin-top: 30px;">
  <router-view/>
  </div>
</template>

<style lang="scss">
  @import "bootstrap";
</style>

<script>
/* eslint-disable */
  export default{
    data(){
      return {
        firstTest:process.env.VUE_APP_TEST,
        firstTest2:process.env.VUE_APP_TEST2,
      };
    },
  }
</script>
