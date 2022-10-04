<template>
    <h1 class="test">這是測試</h1>
    <button type="button" class="btn btn-danger">Danger</button>
    <h1 class="danger" style="display:none">真的超級危險</h1>
    <swiper
    :style="{
      '--swiper-navigation-color':'#fff00',
      '--swiper-pagination-color': '#000080',
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
    <swiper-slide style="background-image:url(https://i.pinimg.com/236x/25/6c/d5/256cd5d6484538b4bc710de34d533044.jpg),url(https://i.pinimg.com/236x/c8/1c/18/c81c18929c60347909b49ee4165e0729.jpg);background-position: left top, 509px top;background-repeat: no-repeat;color: white;"><h1>各式飲品</h1></swiper-slide>
  </swiper>
</template>

<script>
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import $ from 'jquery'
export default {
    components: {
        Swiper,
        SwiperSlide,
     },
    setup() {
    return {
     modules: [Autoplay, Pagination, Navigation],
    };
    },
    created(){
        $(document).ready(function(){
            $('button').click(function(){
                $('.danger').slideToggle();
            })
        });
    }
}
</script>
<style>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
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
