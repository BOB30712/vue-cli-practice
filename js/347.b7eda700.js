"use strict";(self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[]).push([[347],{4347:function(e,a,s){s.r(a),s.d(a,{default:function(){return U}});var l=s(6252),r=s(3577),t=s(9963);const o={class:"my-5 row justify-content-center"},m={class:"mb-3"},d=(0,l._)("label",{for:"email",class:"form-label"},"Email",-1),i={class:"mb-3"},n=(0,l._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),c={class:"mb-3"},u=(0,l._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),f={class:"mb-3"},p=(0,l._)("label",{for:"address",class:"form-label"},"收件人地址",-1),h={class:"mb-3"},b=(0,l._)("label",{for:"message",class:"form-label"},"留言",-1),v=(0,l._)("div",{class:"text-end"},[(0,l._)("button",{class:"btn btn-danger"},"送出訂單")],-1);function _(e,a,s,_,g,V){const y=(0,l.up)("Field"),U=(0,l.up)("ErrorMessage"),C=(0,l.up)("Form");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(C,{class:"col-md-6",onSubmit:a[5]||(a[5]=a=>V.createOrder(e.user))},{default:(0,l.w5)((({errors:e})=>[(0,l._)("div",m,[d,(0,l.Wm)(y,{id:"email",name:"email",type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),modelValue:g.form.user.email,"onUpdate:modelValue":a[0]||(a[0]=e=>g.form.user.email=e),placeholder:"請輸入 Email",rules:"email|required"},null,8,["class","modelValue"]),(0,l.Wm)(U,{name:"email",class:"invalid-feedback"})]),(0,l._)("div",i,[n,(0,l.Wm)(y,{id:"name",name:"姓名",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["姓名"]}]),modelValue:g.form.user.name,"onUpdate:modelValue":a[1]||(a[1]=e=>g.form.user.name=e),placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),(0,l.Wm)(U,{name:"姓名",class:"invalid-feedback"})]),(0,l._)("div",c,[u,(0,l.Wm)(y,{id:"tel",name:"電話",type:"tel",class:(0,r.C_)(["form-control",{"is-invalid":e["電話"]}]),modelValue:g.form.user.tel,"onUpdate:modelValue":a[2]||(a[2]=e=>g.form.user.tel=e),placeholder:"請輸入電話",rules:"required"},null,8,["class","modelValue"]),(0,l.Wm)(U,{name:"電話",class:"invalid-feedback"})]),(0,l._)("div",f,[p,(0,l.Wm)(y,{id:"address",name:"地址",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["地址"]}]),modelValue:g.form.user.address,"onUpdate:modelValue":a[3]||(a[3]=e=>g.form.user.address=e),placeholder:"請輸入地址",rules:"required"},null,8,["class","modelValue"]),(0,l.Wm)(U,{name:"地址",class:"invalid-feedback"})]),(0,l._)("div",h,[b,(0,l.wy)((0,l._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":a[4]||(a[4]=e=>g.message=e)},null,512),[[t.nr,g.message]])]),v])),_:1})])}var g={data(){return{order:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},message:"",IsEmpty:!1}},methods:{test(){console.log(this.order)},getUserCart(){const e="https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/cart";this.$http.get(e).then((e=>{e.data.data.carts.length>0?this.IsEmpty=!0:(this.IsEmpty=!1,alert("目前尚未建立任何購物車"),this.$router.push("/UserBoard/UserCart"))}))},createOrder(e){const a="https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/order";this.$http.post(a,{data:this.form}).then((e=>{console.log(e),this.$router.push(`/UserBoard/UserCheckOut/${e.data.orderId}`)}))}},created(){this.getUserCart()}},V=s(3744);const y=(0,V.Z)(g,[["render",_]]);var U=y}}]);
//# sourceMappingURL=347.b7eda700.js.map