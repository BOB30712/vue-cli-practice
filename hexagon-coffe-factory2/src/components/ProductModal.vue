<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
<!-- 請同學自行新增 v-model -->
<div class="modal-dialog modal-xl" role="document">
  <div class="modal-content border-0">
    <div class="modal-header bg-dark text-white">
      <h5 class="modal-title" id="exampleModalLabel">
        <span>新增產品</span>
      </h5>
      <button type="button" class="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-sm-4">
          <div class="mb-3">
            <label for="image" class="form-label">輸入圖片網址</label>
            <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="ProductInfo.imageUrl">
          </div>
          <div class="mb-3">
            <label for="customFile" class="form-label">或 上傳圖片
              <i class="fas fa-spinner fa-spin"></i>
            </label>
            <input type="file" id="customFile" class="form-control" ref="fileInput">
          </div>
          <img class="img-fluid" alt="" :src="ProductInfo.imageUrl">
          <!-- 延伸技巧，多圖 -->
          <div class="mt-5" v-if="ProductInfo.imagesUrl">
            <div class="mb-3 input-group" v-for="(image, key) in ProductInfo.imagesUrl" :key="key">
              <input type="url" class="form-control form-control"
                      placeholder="請輸入連結" v-model="ProductInfo.imagesUrl[key]">
              <button type="button" class="btn btn-outline-danger" @click="ProductInfo.imagesUrl.splice(key, 1)">
                移除
              </button>
            </div>
          </div>
          <div>
            <button class="btn btn-outline-primary btn-sm d-block w-100"  @click.prevent="ProductInfo.imagesUrl.push('')">
              新增圖片
            </button>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="mb-3">
            <label for="title" class="form-label">標題</label>
            <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題" v-model="ProductInfo.title">
          </div>

          <div class="row gx-2">
            <div class="mb-3 col-md-6">
              <label for="category" class="form-label">分類</label>
              <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model="ProductInfo.category">
            </div>
            <div class="mb-3 col-md-6">
              <label for="price" class="form-label">單位</label>
              <input type="text" class="form-control" id="unit"
                      placeholder="請輸入單位" v-model="ProductInfo.unit">
            </div>
          </div>

          <div class="row gx-2">
            <div class="mb-3 col-md-6">
              <label for="origin_price" class="form-label">原價</label>
              <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價" v-model="ProductInfo.origin_price">
            </div>
            <div class="mb-3 col-md-6">
              <label for="price" class="form-label">售價</label>
              <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model="ProductInfo.price">
            </div>
          </div>
          <hr>

          <div class="mb-3">
            <label for="description" class="form-label">產品描述</label>
            <textarea type="text" class="form-control" id="description"
                      placeholder="請輸入產品描述" v-model="ProductInfo.description"></textarea>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">說明內容</label>
            <textarea type="text" class="form-control" id="content"
                      placeholder="請輸入產品說明內容" v-model="ProductInfo.content"></textarea>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" 

              v-model="ProductInfo.is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary"
              data-bs-dismiss="modal">取消
      </button>
      <button type="button" class="btn btn-primary" @click="$emit('update-product',ProductInfo)">確認</button>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default{
    data(){
        return{
            modal:{},
            ProductInfo:{
              imagesUrl:[]
            }
        }
    },
    props:{
        product:{
        type: Object,
        default() {return {}}
      }
    },
    watch:{
        product(){
            this.ProductInfo=this.product
            if (!this.ProductInfo.imagesUrl) {
              this.ProductInfo.imagesUrl = [];
            }
        }
    },
    methods:{
        show(){
            this.modal.show()
        },
        hide(){
          this.modal.hide()
        }
    },
    mounted(){
        this.modal = new Modal(this.$refs.modal)
    }
}
</script>