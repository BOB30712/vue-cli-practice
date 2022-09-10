<template>
  <Loading :active="isLoading"></Loading>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-7">
          <table class="table align-middle">
            <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in product" :key="item">
              <td style="width: 200px">
                <div v-if="!item.imageUrl">尚未有圖片</div>
                <div v-else :style="{backgroundImage: `url(${item.imageUrl})`}" style="height: 100px; background-size: cover; background-position: center"></div>
              </td>
              <td><a href="#" class="text-dark">{{item.title}}</a></td>
              <td>
                <div class="h5">{{item.origin_price}}</div>
                <del class="h6">{{item.price}}</del>
                <div class="h5"></div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">
                    查看更多
                  </button>
                  <button :disabled="this.status.loadingItem==item.id" type="button" class="btn btn-outline-danger" @click="addProductCart(item.id)">
                    <div v-if="this.status.loadingItem==item.id" class="spinner-grow text-danger spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-5">
          <div class="sticky-top">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th></th>
                  <th>品名</th>
                  <th style="width: 130px">數量</th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in productCart.carts" :key="item">
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                      刪
                    </button>
                  </td>
                  <td>
                    {{item.product.title}}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input min="1" type="number" class="form-control" v-model="item.qty" @change="changeqty(item.id,item.qty)" :disabled="item.id === status.loadingItem">
                      <div class="input-group-text">/{{item.product.unit}}</div>
                    </div>
                  </td>
                  <td class="text-end" v-if="item.coupon">
                    <small class="text-success">折扣價：{{item.product.price}}</small>
                  </td>
                </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{productCart.total}}</td>
              </tr>
              <tr v-if="productCart.final_total!=productCart.total">
                <td colspan="3" class="text-end text-success" >折扣價</td>
                <td class="text-end text-success">{{productCart.final_total}}</td>
              </tr>
              </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control" placeholder="輸入禮包碼" v-model="coupon_code">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="useCoupon(coupon_code)">
                  套用優惠碼
                </button>
              </div>
            </div>
            <div class="input-group mb-3 input-group-sm btn-group">
                <button class="btn btn-sm btn-outline-danger" type="button" @click="removeAllCartItem">
                  清空購物車
                </button>
            </div>
            </div>
           </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: [],
      productCart: [],
      productCartid: [],
      coupon_code: '',
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  methods: {
    getAllProduct (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((res) => {
          // console.log(res)
          this.product = res.data.products
        })
    },
    getProduct (id) {
      this.$router.push(`/UserBoard/UserProduct/${id}`)
    },
    getProductCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          // console.log(res)
          this.productCart = res.data.data
        })
    },
    addProductCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.status.loadingItem = id
      this.$http.post(url, { data: cart })
        .then((res) => {
          // console.log(res)
          this.getProductCart()
        })
    },
    removeCartItem (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url)
        .then((res) => {
          // console.log(res)
          this.getProductCart()
        })
    },
    removeAllCartItem () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then((res) => {
          // console.log(res)
          this.getProductCart()
        })
    },
    changeqty (id, count) {
      this.isLoading = true
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      const cart = {
        product_id: id,
        qty: count
      }
      this.$http.put(url, { data: cart })
        .then((res) => {
          this.getProductCart()
          this.status.loadingItem = ''
          this.isLoading = false
        })
    },
    useCoupon (name) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: name
      }
      this.$http.post(url, { data: coupon })
        .then((res) => {
          // console.log(res)
          this.coupon_code = ''
          this.getProductCart()
        })
    }
  },
  created () {
    this.getAllProduct()
    this.getProductCart()
  }
}
</script>
