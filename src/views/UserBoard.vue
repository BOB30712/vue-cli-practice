<template>
    <div class="row">
        <div class="col-2">
            <ul class="list-group">
                <router-link to="/UserBoard/UserCart" class="list-group-item">所有商品(客戶端)</router-link>
                <router-link to="/UserBoard/SendOrder" class="list-group-item">送出訂單</router-link>
            </ul>
        </div>
        <div class="col-10">
            <ToastMessages></ToastMessages>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
export default {
  provide () {
    return {
      emitter
    }
  },
  components: {
    ToastMessages
  }
}
</script>
