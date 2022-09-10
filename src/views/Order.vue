<template>
<table class="table mt-4">
    <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody>
      <template v-for="item in Order" :key="item">
        <tr>
          <td>{{$filter.date(item.create_at)}}</td>
          <td><span>{{item.user.email}}</span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="i in item.products" :key="i">
                {{i.product.title}} 累計 {{i.qty}} 每份 {{i.product.price}}元
              </li>
            </ul>
          </td>
          <td class="text-right">{{item.total}}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" v-model="item.is_paid">
              <label class="form-check-label">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                      @click="openModal(item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm"
                      @click="openDelOrderModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <DelOrder ref="del" :delitem="temporder" @delete-product="delOrder"></DelOrder>
  <DetailOrder ref="DetailOrderRef" :order="temporder"></DetailOrder>
</template>

<script>
import DetailOrder from '../components/OrderModal.vue'
import DelOrder from '../components/DelProductModal.vue'
export default {
  data () {
    return {
      Order: [],
      temporder: {}
    }
  },
  inject: ['emitter'],
  components: {
    DetailOrder,
    DelOrder
  },
  methods: {
    getAllOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=1`
      this.$http.get(api)
        .then((res) => {
          console.log(res)
          this.Order = res.data.orders
        })
    },
    openModal (item) {
      this.temporder = { ...item }
      const m = this.$refs.DetailOrderRef
      m.show()
    },
    openDelOrderModal (item) {
      this.temporder = { ...item }
      const m = this.$refs.del
      m.show()
    },
    delOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.temporder.id}`
      this.$http.delete(api)
        .then((res) => {
          console.log(res)
          this.getAllOrder()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '刪除成功'
          })
        })
      const m = this.$refs.del
      m.hide()
    }
  },
  created () {
    this.getAllOrder()
    console.log('進入訂單頁面')
  }
}
</script>
