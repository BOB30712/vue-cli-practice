<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark py-0" style="position:relative">
  <div class="container">
    <a class="navbar-brand" href="#">六角咖啡工廠</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active fs-3" aria-current="page" href="#">首頁</a>
          <ul>
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="link nav-link fs-3" to="/UserBoard/UserCart">購買商品</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-3" href="#">課程報名</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-3" href="#">關於我們</a>
        </li>
        <li class="nav-item">
          <router-link class="link nav-link fs-3" to="/UserBoard/UserCart"><i class="bi bi-cart-fill"></i></router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light text-dark hide w-100" style="display: none;position: absolute;z-index:51;">
  <div class="container">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-dark fs-3" aria-current="page" href="#">
            <router-link to="/test">Test</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark fs-3" href="#">Features</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <router-view/>
  <FooterComp/>
</template>
<script>
import $ from 'jquery'
import FooterComp from '@/components/FooterComp.vue';
export default {
  components:{
    FooterComp
},
  created(){
      $(document).ready(function(){
          $('a').click(function(e){
            e.preventDefault();
          })
          $('a').mouseenter(function(){
            $(this).toggleClass('bg-light text-dark')
            $('.hide').slideDown()
          })
          $('a').mouseleave(function(){
            $(this).toggleClass('bg-light text-dark')
          })
          $('.hide').mouseleave(function(){
            $(this).slideUp()
          })
      });
  }
}
</script>

<style lang="scss">
*{
  outline: 1px solid black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>