<template>
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
    <swiper-slide style="background-image:url(https://i.pinimg.com/564x/d0/a8/9b/d0a89b58d41e55fd4b34f577af7fa113.jpg);"><a href="#" class="stretched-link text-white"><h1>各式總類咖啡豆</h1></a></swiper-slide>
    <swiper-slide style="background-image:url(https://cdn.pixabay.com/photo/2016/09/30/11/13/coffee-tin-1705026__340.jpg);background-size: cover;background-repeat: no-repeat;color: white;"><h1>專業教學調製咖啡</h1></swiper-slide>
    <swiper-slide style="background-image:url(https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864__340.jpg);background-size: cover;background-position: center center;background-repeat: no-repeat;color: white;"><h1>所有器具購買</h1></swiper-slide>
    <swiper-slide style="background-image:url(https://i.pinimg.com/236x/25/6c/d5/256cd5d6484538b4bc710de34d533044.jpg),url(https://i.pinimg.com/236x/c8/1c/18/c81c18929c60347909b49ee4165e0729.jpg);background-position: left top, 509px 300px;background-repeat: no-repeat;color: white;"><h1>各式飲品</h1></swiper-slide>
  </swiper>
  <div class="container">
    <div class="row align-items-center bg-success my-3">
        <div class="col">
            <h2>特殊風味</h2>
            <h2>全新上市</h2>
        </div>
        <div class="col">
            <img src="https://www.starbucks.com.tw/common/objects/images/product/20211001141237197.jpg" alt="">
        </div>
    </div>
    <div class="row align-items-center bg-secondary my-3">
        <div class="col">
            <img src="https://i.pinimg.com/236x/83/ef/1a/83ef1ae2fd24fe2133aafe623986d83e.jpg" alt="">
        </div>
        <div class="col">
            <h2>各式器具</h2>
            <h2>都在這裡</h2>
        </div>
    </div>
    <div class="row align-items-center my-3">
        <div class="col p-5" style="background-image: linear-gradient(to left top, red,yellow);">
            <h2>成為咖啡達人</h2>
            <h2>馬上加入課程</h2>
        </div>
        <div class="col bg-danger p-5" style="background-image: linear-gradient(to top, red,yellow);">
            <h2>更多好康</h2>
            <h2>加入會員</h2>
        </div>
    </div>
  </div>
</template>

<script>
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
     },
    setup() {
    return {
     modules: [Autoplay, Pagination, Navigation],
    };
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
  height: 600px;
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

</style>