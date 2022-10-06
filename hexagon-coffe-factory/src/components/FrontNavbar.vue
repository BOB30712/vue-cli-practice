<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark  py-0" style="position:relative">
  <div class="container">
    <a class="navbar-brand text-white" href="#">六角咖啡工廠</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link fs-3" href="#">首頁</a>
          <ul>
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-3" to="/UserCart">購買商品</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-3" href="#">課程報名</a>
        </li>
        <li class="nav-item">
          <router-link class="link nav-link fs-3" to="/UserCartList">關於我們</router-link>
        </li>
        <li class="nav-item">
          <router-link class="link nav-link fs-3" to="/AcompPage/AcompPage2"><i class="bi bi-heart"><div class="divright"><p class="rounded px-1">{{num}}</p></div></i></router-link>
        </li>
        <li class="nav-item">
          <router-link class="link nav-link fs-3" to="/UserCartList"><i class="bi bi-cart-fill"></i></router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
    import $ from 'jquery'
    export default {
      data () {
            return {
              num:0
            }
        },
      created(){
        this.$emitter.on('senddata', (data) => { this.num = data })
        /*
        if(localStorage.getItem('count')){
        this.num=localStorage.getItem('count22');
        this.$emitter.on('senddata', (data) => { this.num = data })
        }
        */
        $(document).ready(function(){
        });
      }
    }
</script>

<style lang="scss">
.nav-item:hover{
    color: black;
    background-color: white;
}
.nav-item>a:hover{
    color: black;
}

.bi{
position: relative;
}
.divright{
position:absolute;
z-index: 99;
font-size: 5px;
left : 60%;
top : -20%;
text-align: center;
}
.divright p{
background-color: white;
font-weight: bold;
color: black;
border: 1px solid black;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active{
      color: red;
      background-color: white;
    }
  }
}
</style>