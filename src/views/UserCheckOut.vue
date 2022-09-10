<template>
<div class="my-5 row justify-content-center">
    <form class="col-md-6">
      <table class="table align-middle">
        <thead>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
        </thead>
        <tbody>
        <tr v-for="item in AllProduct" :key="item">
          <td>{{item.product.title}}</td>
          <td>{{item.qty}}/{{item.product.unit}}</td>
          <td class="text-end">{{item.product.price}}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2" class="text-end">總計 {{totalprice}} 元</td>
          <td class="text-end"></td>
        </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
        <tr>
          <th width="100">Email</th>
          <td>{{User.email}}</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td>{{User.name}}</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td>{{User.tel}}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>{{User.address}}</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td>
            <span v-if="!IsPaid">尚未付款</span>
            <span class="text-success" v-else>付款完成</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="text-end">
        <button class="btn btn-danger" @click="PayOrder">確認付款去</button>
      </div>
    </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      CartId: '',
      User: {},
      AllProduct: [],
      IsPaid: false,
      totalprice: 0
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.CartId}`
      this.$http.get(url)
        .then((res) => {
          // console.log(res)
          this.User = res.data.order.user
          this.AllProduct = res.data.order.products
          this.IsPaid = res.data.order.is_paid
          this.totalprice = res.data.order.total
        })
    },
    PayOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.CartId}`
      this.$http.post(url)
        .then((res) => {
          console.log(res)
          alert('已完成付款')
          this.getCart()
        })
    }
  },
  created () {
    // console.log(this.$route.params.UserCartId)
    this.CartId = this.$route.params.UserCartId
    this.getCart()
  }
}
</script>
