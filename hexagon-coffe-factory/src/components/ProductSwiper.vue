<template>
<swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
    clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
>
    <swiper-slide2>
        <div class="card border border-5">
        <div class="card-body">
            <h5 class="card-title text-end">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link text-dark">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
    </swiper-slide2>
    <swiper-slide2>
        Slide 3
    </swiper-slide2>
    <swiper-slide2>Slide 3</swiper-slide2>
    <swiper-slide2>Slide 4</swiper-slide2>
    <swiper-slide2>Slide 5</swiper-slide2>
    <swiper-slide2>Slide 6</swiper-slide2>
    <swiper-slide2>Slide 7</swiper-slide2>
    <swiper-slide2>Slide 8</swiper-slide2>
    <swiper-slide2>Slide 9</swiper-slide2>
</swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export default {
components: {
    Swiper,
    SwiperSlide2:SwiperSlide,
},
setup() {
    return {
    modules: [ Navigation],
    };
},
};
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
  height: 200px;
}

.swiper-slide2 {
  font-size: 50px;
  background: transparent;

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

</style>
  