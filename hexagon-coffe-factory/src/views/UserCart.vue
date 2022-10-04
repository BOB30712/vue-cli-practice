<template>
    <div class="row mt-5">
    <div class="col-lg-4 col-12">
        <ul class="list-unstyled row row-cols-lg-1 row-cols-3">
            <li class="px-0"><a class="active d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('all')"><i class="bi bi-cup-fill icon"></i>All</a></li>
            <li class="px-0"><a class="d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('卡布奇諾')"><i class="bi bi-cup-fill icon"></i>卡布奇諾</a></li>
            <li class="px-0"><a class="d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('濃縮咖啡')"><i class="bi bi-cup-fill icon"></i>濃縮咖啡</a></li>
            <li class="px-0"><a class="d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('拿鐵')"><i class="bi bi-cup-fill icon"></i>拿鐵</a></li>
            <li class="px-0"><a class="d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('分類1')"><i class="bi bi-cup-fill icon"></i>分類1</a></li>
        </ul>
    </div>
    <div class="col-lg-8 col-12">
    <ul class="list-unstyled row row-cols-1 row-cols-lg-3 gy-3">
        <template v-for="item in products" :key="item">
            <li class="col">
                <div class="card w-100 position-relative test1-link">
                    <div class="position-absolute top-0 end-0 m-3 test1">
                        <router-link to="/"><i class="bi bi-heart-fill fs-3"></i></router-link>
                    </div>
                    <img :src="item.imageUrl" class="card-img-top" alt="..." style="height:200px;object-fit: cover;">
                    <div class="card-body">
                        <h3>{{item.content}}咖啡</h3>
                        <div class="d-flex">
                            <a href="" class="fs-4"><i class="bi bi-cart-fill test3 px-3"></i></a>
                            <p class="card-text ms-auto fs-4">售價$: {{item.price}}</p>
                        </div>
                    </div>
                    <div class="card-img-overlay test1 h-25" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));margin-top: 100px;">
                        <router-link to="/"><p class="card-text text-white text-center fw-bold border test2 p-3" style="letter-spacing: 5px;">了解更多</p></router-link>
                    </div>
                </div>
            </li>
        </template>
    </ul>
    </div>
    </div>

</template>

<style>
    .active.selector{
        color: black;
    }
    .selector::after{
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        border-bottom: 5px solid black;
    }
    .selector:hover::after{
        width: 100%;
        transition: all 0.8s;
    }
    .active>.icon{
        display: inline;
    }
    .icon{
        display: none;
    }
    .selector{
        color: gray;
        position: relative;
    }
    .selector:hover{
       color: black; 
    }
    .test3{
        color: white;
        background-color: black;
    }
    .test3:hover{
        color: black;
        background-color: white;
    }
    .test2{
        position: relative;
    }
    .test2::after{
        top: 6px;
        left: 6px;
        content: " ";
        width: 100%;
        height: 100%;
        position: absolute;
        border: 1px solid #fff;	
    }
     .test2:hover::after{
        top: 0;
        left: 0;
        border: 1px solid #fff;
        transition: all 0.8s;
    }
    i:hover{
        color: brown;
    }
    .test1{
        display: none;
    }
    div> .img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position: 50%  20%;
        transition: all 0.8s;
    }
    .img:hover{
        opacity: 0.5;
        transition: all 0.8s;
        transform: scale(1.5);
    }
    .test1-link:hover .test1{
        display: block;
    }
</style>

<script>
import $ from 'jquery'
export default {
    data () {
        return {
            products:[],
            color:''
        }
    },
    methods: {
        selector (category) {
            //alert(category);
            const api = `https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/products/all`
            this.$http.get(api)
            .then((res) => {
                if(category!='all'){
                    this.products=res.data.products.filter(function(item){
                    return item.category==category;
                    });  
                }else{
                    this.products=res.data.products
                }
            });
        }
    },
    created () {
        const api = `https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/products/all`
        this.$http.get(api)
        .then((res) => {
            /*
          this.products=res.data.products.filter(function(item){
            return item.category=='卡布奇諾';
          });
          */
          this.products=res.data.products;
          console.log(this.products);
        });
        $(document).ready(function(){
            $('.selector').click(function(){
                $(this).toggleClass('active').parent().siblings().find('.selector').removeClass('active');
            })
        })
    }
}
</script>