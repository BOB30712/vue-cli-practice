"use strict";(self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[]).push([[887],{5887:function(t,r,c){c.r(r),c.d(r,{default:function(){return j}});var e=c(6252),u=c(3577);const o={class:"container"},s={"aria-label":"breadcrumb"},a={class:"breadcrumb"},i={class:"breadcrumb-item"},n=(0,e.Uk)("購物車"),l=(0,e._)("li",{class:"breadcrumb-item active","aria-current":"page"},null,-1),d={class:"row justify-content-center"},h={class:"col-8"},p=(0,e._)("div",null,null,-1),_=(0,e._)("div",null,null,-1),m=["src"],b={class:"col-4"},v={class:"h5"},g={class:"h6"},f={class:"h5"},P=(0,e._)("hr",null,null,-1);function w(t,r,c,w,k,C){const U=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",o,[(0,e._)("nav",s,[(0,e._)("ol",a,[(0,e._)("li",i,[(0,e.Wm)(U,{to:"/UserBoard/UserCart"},{default:(0,e.w5)((()=>[n])),_:1})]),l])]),(0,e._)("div",d,[(0,e._)("article",h,[(0,e._)("h2",null,(0,u.zw)(k.currentProduct.title),1),p,_,(0,e._)("img",{src:k.currentProduct.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,m)]),(0,e._)("div",b,[(0,e._)("div",v,(0,u.zw)(k.currentProduct.price)+"元",1),(0,e._)("del",g,"原價 "+(0,u.zw)(k.currentProduct.origin_price)+" 元",1),(0,e._)("div",f,"現在只要 "+(0,u.zw)(k.currentProduct.price)+" 元",1),P,(0,e._)("button",{type:"button",class:"btn btn-outline-danger",onClick:r[0]||(r[0]=t=>C.addProductCart(k.currentProduct.id))}," 加到購物車 ")])])])}var k={data(){return{id:"",currentProduct:{}}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/product/${this.id}`;this.$http.get(t).then((t=>{this.currentProduct=t.data.product,console.log(t.data.product.imageUrl),console.log(this.currentProduct)}))},addProductCart(t){const r="https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/cart",c={product_id:t,qty:1};this.$http.post(r,{data:c}).then((t=>{console.log(t)})),this.$router.push("/UserBoard/UserCart")}},created(){this.id=this.$route.params.productId,this.getProduct()}},C=c(3744);const U=(0,C.Z)(k,[["render",w]]);var j=U}}]);
//# sourceMappingURL=887.596f9eb8.js.map