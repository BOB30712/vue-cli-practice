<template>
    <ul class="progress-cart  list-unstyled d-flex justify-content-center mt-5">
        <li class="active">購物車清單</li>
        <li>輸入資料</li>
        <li>確認付款</li>
    </ul>
    <div class="row justify-content-center">
        <div class="col-lg-8 col-10 border border-secondary border-3 p-3 mb-5 me-lg-5 table-responsive-lg">
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
                    <button type="button" class="btn btn-outline-dark" @click.prevent="UpdateCartQty(item.id,item.qty-1)" :disabled="item.qty == 1">
                        <i class="bi bi-dash"></i>
                    </button>
                    <input
                        v-model="item.qty"
                        @change="UpdateCartQty(item.id,item.qty)"
                        type="text"
                        min="1"
                        class="form-control form-control-sm text-center border-dark bg-transparent"
                    />
                    <button type="button" class="btn btn-outline-dark" @click.prevent="UpdateCartQty(item.id,item.qty+1)">
                        <i class="bi bi-plus"></i>
                    </button>
                    </div>
                </td>
                <td>
                    <p class="mb-0" :class="{'text-decoration-line-through':item.coupon}">總價{{item.total}}</p>
                    <p class="mb-0 text-success" v-if="item.coupon">折扣後{{item.final_total}}</p>
                </td>
                <td class="text-center fs-3"><button @click.prevent="DeleteCart(item.id)"><i class="bi bi-x-square-fill"></i></button></td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="col-lg-3 col-10 border border-secondary border-3 p-3 mb-5 h-100">
            <p>商品總計:<span class="fs-3 fw-bold ms-2">{{totalPrice}}</span></p>
            <p v-if="useCoupon" class="text-success">套用優惠卷後:<span class="fs-3 fw-bold ms-2">{{finalPrice}}</span></p>
            <button type="button" class="btn btn-success w-100 mb-4" @click.prevent="openModal">抽獎</button>
            <button type="button" class="btn btn-danger w-100 mb-4" @click.prevent="DeleteAllCart">刪除所有購物車</button>
            <router-link class="nav-link fs-3" to="/SendOrder"><button type="button" class="btn btn-dark w-100">進入下一步</button></router-link>
        </div>
    </div>
    <turntable ref='turntable' @update="getProductCart"/>
</template>

<style>
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
  color:#955d42;
}
.progress-cart  li.active:before {
  border-color:black;
}
.progress-cart  li.active + li:after {
  background-color: black;
}
</style>

<script>
import turntable from '@/components/TurntableModal.vue'
    export default {
        data () {
            return {
                ProductCart:[],
                totalPrice:0,
                finalPrice:0,
                couponcode:'',
                useCoupon:false
            }
        },
        components:{
            turntable
        },
        methods:{
            getProductCart () {
                const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
                    this.$http.get(url)
                    .then((res) => {
                        console.log(res)
                        this.ProductCart=res.data.data.carts
                        this.totalPrice=res.data.data.total
                        this.finalPrice=res.data.data.final_total
                        if(res.data.data.final_total!=res.data.data.total){
                            this.useCoupon=true
                        }
                    })
            },
            UpdateCartQty(id,qty){
                const data={
                    "product_id":id,
                    "qty":Number(qty)
                }
                const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
                this.$http.put(url,{'data':data})
                .then(() => {
                    this.getProductCart()
                })
            },
            DeleteCart(id){
                const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
                this.$http.delete(url)
                .then(() => {
                    this.getProductCart()
                    this.$emitter.emit('productcart','觸發子元件重新整理')
                })
            },
            DeleteAllCart(){
                const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
                this.$http.delete(url)
                .then(() => {
                    this.getProductCart()
                    this.$emitter.emit('productcart','觸發子元件重新整理')
                    this.$emitter.emit('opentoast',{style:'danger',text:`移除所有購物車`})
                })
            },
            UseCoupon(code){
                const coupon={
                    'code':code
                }
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
                this.$http.post(api,{data:coupon})
                .then(() => {
                    this.getProductCart();
                });
            },
            openModal(){
                const Component = this.$refs.turntable
                Component.show()
                this.getProductCart();
            }
        },
        created () {
            this.getProductCart();
        }
    }
</script>