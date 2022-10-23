<template>
<div class="modal" tabindex="-1" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="pie" style="z-index: 2;">
            <div class="one">一獎</div>
            <div class="two">二獎</div>
            <div class="three">三號</div>
            <div class="four">四號</div>
        </div>
        <div class="arrow" style="z-index: 3;"></div>
        <div class="Congrats py-5 pe-5 fs-2 fw-bold" style="opacity: 0;position: absolute;top:20%;left: 0%;z-index: 1;width: 100%;text-align:end;background-color: aqua;">
            恭喜<br>獲得<span>{{gift}}</span>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click.prevent="Reset">reset</button>
        <button type="button" class="btn btn-primary" @click.prevent="change">開始</button>
      </div>
    </div>
  </div>
</div>
</template>

<style>
    .pie{
        width: 300px;
        position: relative;
        height: 300px;
        border-radius: 50%;
        background: conic-gradient(red 45deg 90deg, orange 90deg 180deg,red 180deg 270deg, orange 270deg 360deg);
    }
    .pie> .one{
        font-size: 30px;
        font-weight: bold;
        position: absolute;
        top:20%;
        right: 20%;
        transform: rotate(45deg);
    }
    .pie> .two{
        font-size: 30px;
        font-weight: bold;
        position: absolute;
        top:70%;
        right: 20%;
        transform: rotate(135deg);
    }
    .pie> .three{
        font-size: 30px;
        font-weight: bold;
        position: absolute;
        top:70%;
        left: 20%;
        transform: rotate(225deg);
    }
    .pie> .four{
        font-size: 30px;
        font-weight: bold;
        position: absolute;
        top:20%;
        left: 20%;
        transform: rotate(315deg);
    }
    .arrow{
        position: absolute;
        top:140px;
        left: 280px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 40px 20px 0;
        border-color: transparent #007bff transparent transparent;
    }
</style>

<script>
import { gsap } from "gsap";
import Modal from 'bootstrap/js/dist/modal'
export default{
    data(){
        return{
            modal:{},
            gift:''
        }
    },
    methods:{
        show(){
            this.modal.show()
        },
        hide(){
          this.modal.hide()
        },
        change(){
            const randomarry=[30,-75,200,140]
            let final=Math.floor(Math.random() *4);
            //1:30,2:-75,3:200,4:140
            gsap.to('.pie',{rotation:3600+randomarry[final],duration:8});
            gsap.to('.Congrats',{opacity:1,duration:1,delay:9})
            this.gift=final+1
            if(final+1==1){
                this.updateCoupon('788')
            }else if(final+1==3){
                this.updateCoupon('999')
            }
        },
        Reset(){
            gsap.to('.pie',{transform:'rotate(0deg)',duration:1});
            gsap.to('.Congrats',{opacity:0,duration:1})
            this.gift=''
        },
        updateCoupon(name){
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
            const coupon = {
                code: name
            }
            this.$http.post(url, { data: coupon })
            .then((res) => {
                console.log(res)
                this.$emit('update','更新購物車')
            })
        }
    },
    mounted(){
        this.modal = new Modal(this.$refs.modal)
    }
}
</script>