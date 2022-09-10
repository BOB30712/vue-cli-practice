<template>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/UserBoard/UserCart">購物車</router-link></li>
          <li class="breadcrumb-item active" aria-current="page"></li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <article class="col-8">
          <h2>{{currentProduct.title}}</h2>
          <div></div>
          <div></div>
          <img :src="currentProduct.imageUrl" alt="" class="img-fluid mb-3">
        </article>
        <div class="col-4">
          <div class="h5">{{currentProduct.price}}元</div>
          <del class="h6">原價 {{currentProduct.origin_price}} 元</del>
          <div class="h5">現在只要 {{currentProduct.price}} 元</div>
          <hr>
          <button type="button" class="btn btn-outline-danger" @click="addProductCart(currentProduct.id)">
            加到購物車
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      currentProduct: {}
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(api)
        .then((res) => {
          this.currentProduct = res.data.product
          console.log(res.data.product.imageUrl)
          console.log(this.currentProduct)
        })
    },
    addProductCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart })
        .then((res) => {
          console.log(res)
        })
      this.$router.push('/UserBoard/UserCart')
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
