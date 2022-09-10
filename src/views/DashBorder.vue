<template>
  <div class="row">
      <div class="col-2">
          <ul class="list-group">
              <router-link to="/dashborder/productlist" class="list-group-item">所有商品</router-link>
              <router-link to="/dashborder/Order" class="list-group-item">訂單</router-link>
              <router-link to="/dashborder/Coupons" class="list-group-item" >優惠卷</router-link>
              <a @click="logout" class="list-group-item" style="cursor:pointer">登出LogOut</a>
          </ul>
      </div>
      <div class="col-10">
          <ToastMessages></ToastMessages>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
export default {
methods: {
    logout() {
        const api = `${process.env.VUE_APP_API}logout`;
        // console.log(this.user)
        this.$http.post(api, this.user)
            .then((res) => {
            console.log(res);
            if (res.data.success) {
                console.log("用戶已經登出");
                this.$router.push("/login");
            }
        });
    }
},
provide() {
    return {
        emitter
    };
},
created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)MyVueToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    // console.log(token)
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    // console.log(this.user)
    this.$http.post(api, this.user)
        .then((res) => {
        // console.log(res)
        if (!res.data.success) {
            console.log("失敗");
            this.$router.push("/login");
        }
    });
},
components: { ToastMessages }
}
</script>
