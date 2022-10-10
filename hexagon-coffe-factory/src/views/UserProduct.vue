<template>
    <div class="row mt-5 justify-content-center g-5">
        <div class="col-lg-5 col-8">
            <img class="w-100" style="height: 300px;object-fit: cover;" :src="product.imageUrl" alt="商品圖片">
        </div>
        <div class="col-lg-4 col-8 card border-0" style="height: 300px;">
            <h1>{{product.title}}</h1>
            <p>分類:<span class="border rounded-pill border-4 border-dark px-2 ms-3">{{product.category}}</span></p>
            <h2 class="text-lg-end">價格:{{product.price}}</h2>
            <textarea class="mb-4" name="" id="" cols="20" rows="10" v-model="product.description"></textarea>
            <div class="d-flex justify-content-between mt-lg-auto">
                <div class="input-group" style="width: 150px;">
                    <button type="button" class="btn btn-outline-dark">
                        <i class="bi bi-dash"></i>
                    </button>
                    <input
                        type="text"
                        min="1"
                        class="form-control form-control-sm text-center border-dark bg-transparent"
                    />
                    <button type="button" class="btn btn-outline-dark">
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
                <button type="button" class="btn btn-outline-dark">加入購物車</button>
            </div>
        </div>
    </div>
    <div class="row my-5 d-flex justify-content-center">
        <h3 class="other-product text-center">你可能也會喜歡</h3>
    </div>
</template>
<style>
.other-product{
    letter-spacing: 3px;
    color:brown ;
    position: relative;
    width: 250px;
}
.other-product::after{
    position: absolute;
    content: '';
    top:40%;
    left: -30%;
    width: 90px;
    height: 5px;
    background-color: brown;
}
.other-product::before{
    position: absolute;
    content: '';
    top:40%;
    right: -30%;
    width: 90px;
    height: 5px;
    background-color: brown;
}
</style>
<script>
export default{
    data () {
        return {
            id:'',
            product:{},
        }
    },
    methods:{
        productinfo(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
            this.$http.get(api)
            .then((res) => {
                this.product = res.data.product
                console.log(this.product)
            })
        }
    },
    created () {
        this.id=this.$route.params.productid
        this.productinfo()
    }
}
</script>