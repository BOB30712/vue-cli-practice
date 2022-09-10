<template>
<div class="my-5 row justify-content-center">
      <Form class="col-md-6" v-slot="{ errors }" @submit="createOrder(user)">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }" v-model="form.user.email"
                   placeholder="請輸入 Email" rules="email|required"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }" v-model="form.user.name"
                   placeholder="請輸入姓名" rules="required"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }" v-model="form.user.tel"
                   placeholder="請輸入電話" rules="required"></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }" v-model="form.user.address"
                   placeholder="請輸入地址" rules="required"></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
</div>
</template>

<script>
export default {
  data () {
    return {
      order: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      message: '',
      IsEmpty: false
    }
  },
  methods: {
    test () {
      console.log(this.order)
    },
    getUserCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          // console.log(res)
          if (res.data.data.carts.length > 0) {
            this.IsEmpty = true
          } else {
            this.IsEmpty = false
            alert('目前尚未建立任何購物車')
            this.$router.push('/UserBoard/UserCart')
          }
        })
    },
    createOrder (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(url, { data: this.form })
        .then((res) => {
          console.log(res)
          this.$router.push(`/UserBoard/UserCheckOut/${res.data.orderId}`)
        })
    }
  },
  created () {
    this.getUserCart()
  }

}
</script>
