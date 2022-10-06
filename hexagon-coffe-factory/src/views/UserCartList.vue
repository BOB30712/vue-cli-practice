<template>
    <ul class="progress-cart  list-unstyled d-flex justify-content-center mt-5">
        <li class="active">購物車清單</li>
        <li>step2</li>
        <li>step3</li>
    </ul>
    <div class="row justify-content-center">
        <div class="col-lg-8 col-10 border border-secondary border-3 p-3 mb-5 me-lg-5">
            <table class="table">
            <thead class="table-dark">
                <tr>
                <th scope="col">項次</th>
                <th scope="col">購物車</th>
                <th scope="col">數量</th>
                <th scope="col">總計</th>
                <th scope="col">刪除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, num) in ProductCart" :key="item" class="align-middle">
                <th scope="row">{{num+1}}</th>
                <td>
                    <div class="d-flex align-items-center">
                        <img :src="item.product.imageUrl" alt="" style="width: 150px;height: 90px;object-fit: cover;">
                        <p class="ms-2">{{item.product.title}}</p>
                    </div>
                </td>
                <td>
                    <div class="input-group" style="width: 150px;">
                    <button type="button" class="btn btn-outline-dark" @click.prevent="DecreaseCartQty(item.id,item.qty)" :disabled="item.qty == 1">
                        <i class="bi bi-dash"></i>
                    </button>
                    <input
                        v-model="item.qty"
                        type="text"
                        min="1"
                        class="form-control form-control-sm text-center border-dark bg-transparent"
                    />
                    <button type="button" class="btn btn-outline-dark" @click.prevent="IncreaseCartQty(item.id,item.qty)">
                        <i class="bi bi-plus"></i>
                    </button>
                    </div>
                </td>
                <td>{{item.final_total}}</td>
                <td class="text-center fs-3"><i class="bi bi-x-square-fill"></i></td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="col-lg-3 col-10 border border-secondary border-3 p-3 mb-5">
            <p>商品總計:<span class="fs-3 fw-bold ms-2">{{totalPrice}}</span></p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="輸入優惠碼" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-dark" type="button" id="button-addon2">輸入優惠碼</button>
            </div>
            <button type="button" class="btn btn-dark w-100">進入下一步</button>
        </div>
    </div>
</template>

<style>
*{
    outline: 0px solid black;
}
.progress-cart {
}
.progress-cart  li {
  list-style-type: none;
  float:left;
  width: 33.33%;
  position:relative;
  text-align:center;
}
.progress-cart  li:before {
  font-family: "Font Awesome\ 5 Free";
  font-weight: 900;
  content:"\f0f4";
  width: 30px;
  height: 30px;
  line-height:25px;
  border:3px solid #ddd;
  display:block;
  text-align:center;
  margin:0 auto 10px auto;
  border-radius:50%;
  background-color: #fff;
}
.progress-cart  li:after {
  content:"";
  position:absolute;
  width: 100%;
  height:3px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index:-1;
}
.progress-cart  li:first-child:after {
  content:none;
}
.progress-cart  li.active {
  color:green;
}
.progress-cart  li.active:before {
  border-color:black;
}
.progress-cart  li.active + li:after {
  background-color: black;
}
</style>

<script>
    export default {
        data () {
            return {
                ProductCart:[],
                totalPrice:0
            }
        },
        methods:{
            getProductCart () {
                const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
                    this.$http.get(url)
                    .then((res) => {
                        console.log(res)
                        this.ProductCart=res.data.data.carts
                        this.totalPrice=res.data.data.final_total
                        console.log('ProductCart',this.ProductCart)
                    })
            },
            IncreaseCartQty (id,qty) {
                const data={
                    "product_id":id,
                    "qty":qty+1
                }
                const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
                    this.$http.put(url,{'data':data})
                    .then((res) => {
                        console.log(res)
                        this.getProductCart()
                    })
            },
            DecreaseCartQty (id,qty) {
                const data={
                    "product_id":id,
                    "qty":qty-1
                }
                const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
                    this.$http.put(url,{'data':data})
                    .then((res) => {
                        console.log(res)
                        this.getProductCart()
                    })
            },
        },
        created () {
            this.getProductCart();
        }
    }
</script>