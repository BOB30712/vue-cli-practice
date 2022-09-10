<template>
<Loading :active="isLoading"></Loading>
<div class="text-end">
  <button class="btn btn-primary" type="button"
  @click="openmodel(true)">
  增加產品
  </button>
</div>
<table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in data" :key="item.id">
      <td>{{item.category}}</td>
      <td>{{item.title}}</td>
      <td class="text-right">
        {{$filter.currency(item.origin_price)}}
      </td>
      <td class="text-right">
        {{currency(item.price)}}
      </td>
      <td>
        <span class="text-warning" v-if="!item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm" @click="openmodel(false, item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm" @click="delmodal(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<addproduct ref="productmodal" :product="tempProduct" @update-product="updateProduct"></addproduct>
<delproduct ref="delproduct" :delitem="tempProduct" @delete-product="deleteProduct"></delproduct>
<pageination :pages="CurrentPage" @changePage="getProduct"></pageination>
</template>

<script>
import addproduct from '../components/ProductModal.vue'
import delproduct from '../components/DelProductModal.vue'
import pageination from '../components/PageinAtion.vue'
import emitter from '@/methods/emitter'
import { currency } from '../methods/filters'
export default {
  data () {
    return {
      data: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      CurrentPage: {}
    }
  },
  // inject: ['emitter'],
  components: {
    delproduct,
    addproduct,
    pageination
  },
  methods: {
    currency,
    openmodel (isNew, item) {
      // @click="this.$refs.productmodal.showmodal"
      if (isNew) {
        this.tempProduct = {}
      } else {
        // ...item淺層拷貝
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productmodal
      productComponent.showmodal()
    },
    getProduct (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          this.data = res.data.products
          this.CurrentPage = res.data.pagination
          // console.log(page)
          // console.log(res)
          // console.log(api)
        })
    },
    updateProduct (item) {
      this.tempProduct = item
      // 新增
      const productComponent = this.$refs.productmodal
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        httpMethod = 'put'
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      }

      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          // console.log(res)
          this.getProduct()
          productComponent.hidemodal()
          if (res.data.success) {
            emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })
          } else {
            emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、')
            })
          }
        })
    },
    delmodal (item) {
      this.tempProduct = item
      console.log('刪除', item.title)
      const delproduct = this.$refs.delproduct
      delproduct.show()
    },
    deleteProduct (delid) {
      console.log('確定已經刪除', delid)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${delid}`
      this.$http.delete(api)
        .then((res) => {
          console.log(res)
          this.getProduct()
        })
      const delproduct = this.$refs.delproduct
      delproduct.hide()
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
