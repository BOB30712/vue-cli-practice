<template>
    <frontnavbar/>
    <swiper
    :style="{
      '--swiper-navigation-color':'#FFFFFF',
      '--swiper-pagination-color': '#FFFFFF',
    }"
    :loop="true"
    :centeredSlides="true"
    :speed="2000"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide style="background-image:url(https://i.pinimg.com/564x/bf/a4/3b/bfa43b2361622be48c94266dbd7dd805.jpg);background-size: cover;background-position: center center">
      <div class="position-relative" style="width: 100%;height: 100%;">
        <div class="position-absolute advertise1" style="width: 300px;">
          <p class="text-start fw-bold fs-3">累積生命 暢想生活</p>
          <router-link class="nav-link fs-3" to="/UserCart"><button type="button" class="btn btn-outline-dark ms-5">香醇體驗，隨時擁有</button></router-link>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="background-image:url(https://cdn.pixabay.com/photo/2016/09/30/11/13/coffee-tin-1705026__340.jpg);background-size: cover;background-repeat: no-repeat;color: white;">
      <div class="position-relative" style="width: 100%;height: 100%;">
        <div class="position-absolute advertise2" style="width: 300px;">
          <p class="text-start text-white fw-bold fs-3 mb-5">最簡單的方式<br>煮出獨具風味</p>
          <router-link class="nav-link fs-3" to="/JoinCourse"><button type="button" class="btn btn-outline-light ms-5 mt-5">了解更多</button></router-link>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="background-image:url(https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864__340.jpg);background-size: cover;background-position: center center;background-repeat: no-repeat;color: white;">
      <div class="position-relative" style="width: 100%;height: 100%;">
        <div class="position-absolute advertise3" style="width: 300px;">
          <p class="text-start text-white fw-bold fs-3 mb-5">加入會員享有更多優惠</p>
          <router-link class="nav-link fs-3" to="/JoinCourse"><button type="button" class="btn btn-outline-light ms-5 px-5">更多好康</button></router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <div class="container">
    <div class="row align-items-center my-3 animated-top" :class="{ 'fadeIn-top': act }">
        <div class="col text-center d-none d-lg-block" style="color: transparent;background-image: linear-gradient(45deg, #F37335, #FDC830 80%); -webkit-background-clip: text;background-clip: text;font-size: 120px;">
            <p class="fw-bold">特殊風味</p>
            <p class="fw-bold">全新上市</p>
        </div>
        <div class="col position-relative">
            <a @click="getProduct(product.id)" style="cursor: pointer;">
            <div class="d-lg-none position-absolute" style="top:40%;right:40%"><p class="fs-1 fw-bold text-white mb-5">特殊風味</p><p class="fs-1 fw-bold text-white">全新上市</p></div>
            <img :src="product.imageUrl" alt="" style="width:100%;height:500px;object-fit: cover;">
            </a>
        </div>
    </div>
    <div class="row align-items-center my-3 position-relative" style="overflow:hidden;background-image: url(https://cdn.pixabay.com/photo/2015/09/21/13/17/road-949832_960_720.jpg);background-attachment: fixed">
        <div class="position-absolute text-white" style="top:83%;left:52%;">
          <p style="font-size: 50px;font-weight: bold;letter-spacing: 5px;">HexagonCoffee</p>
        </div>
        <div class="col-4">
            <img src="https://i.pinimg.com/236x/83/ef/1a/83ef1ae2fd24fe2133aafe623986d83e.jpg" alt="">
          </div>
        <div class="col">
          <p class="text-white fs-5">That afternoon, the cup of coffee, let me understand: we who are not who,<br> you are waiting for the coffee to add sugar, I am looking forward to someone who will share the bitter coffee alone.</p>
        </div>
    </div>
    <div class="row align-items-center my-3 animated-left">
        <div class="col p-5" style="background-image: linear-gradient(to left top, red,yellow);">
            <h2>成為咖啡達人</h2>
            <h2>馬上加入課程</h2>
        </div>
        <div class="col bg-danger p-5" style="background-image: linear-gradient(to top, red,yellow);">
            <h2>更多好康</h2>
            <h2>加入會員</h2>
        </div>
    </div>
    <productswiper/>
  </div>

</template>

<script>
import $ from 'jquery'
import frontnavbar from '@/components/FrontNavbar.vue'
import productswiper from '@/components/ProductSwiper.vue'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  data(){
    return {
      act: false,
      product:{}
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    frontnavbar,
    productswiper
  },
  methods:{
    handleScroll() {
      this.act = window.scrollY > 300
    },
    getProduct (id) {
      this.$router.push(`/UserProduct/${id}`)
    }
  },
  setup() {
  return {
    modules: [Autoplay, Pagination, Navigation],
  };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    $(window).scroll(function(){
      if($(window).scrollTop()>=1000){
        $(".animated-left").addClass('fadeIn-left');
      }else{
        $(".animated-left").removeClass('fadeIn-left');
      }
    });
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
    this.$http.get(api)
    .then((res) => {
      const num=Math.random()*res.data.products.length
      this.product=res.data.products[parseInt(num)];
      console.log(parseInt(num))
    });
  }
}
</script>
<style>
html,
body {
  position: relative;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.advertise1{
  right: 5%;
  bottom: 5%;
}

.advertise2{
  left: 5%;
  top: 15%;
}
.advertise3{
  right: 5%;
  top: 15%;
}
.advertise3 button{
  margin-top: 60%;
}

.animated-top {
  opacity: 0;
  transition: all 1.5s;
  transform: translateY(100px);
}
.fadeIn-top {
  opacity: 1;
  transform: translateY(0px);
}
.animated-left {
  opacity: 0;
  transition: all 1.5s;
  transform: translateX(100px);
}
.fadeIn-left {
  opacity: 1;
  transform: translateX(0px);
}
</style>