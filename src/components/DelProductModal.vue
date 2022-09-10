<template>
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">資料刪除提醒</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body bg-danger text-white">
        確定刪除" {{delproduct.id}} "這份資料嗎
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal" @click="hide">取消</button>
        <button type="button" class="btn btn-danger" @click="$emit('delete-product',delproduct.id)">確定</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal2 from 'bootstrap/js/dist/modal'
export default {
  props: {
    delitem: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    delitem () {
      this.delproduct = this.delitem
    }
  },
  data () {
    return {
      modal2: {},
      delproduct: {}
    }
  },
  methods: {
    show () {
      this.modal2.show()
      // console.log('測試')
    },
    hide () {
      console.log('取消刪除')
      this.modal2.hide()
    }
  },
  mounted () {
    const testmodal = document.querySelector('#exampleModal2')
    // this.modal = new Modal(this.$refs.modal)
    this.modal2 = new Modal2(testmodal)
  }
}
</script>
