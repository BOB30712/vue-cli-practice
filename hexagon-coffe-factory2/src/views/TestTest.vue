<template>
    <button class="button" @click.prevent="open">旋轉</button>
    <turntable ref='turntable'/>
</template>
<script>
import turntable from '@/components/TurntableModal.vue'

export default{
    components:{
        turntable
    },
    methods:{
        open(){
            const Component = this.$refs.turntable
            Component.show()
        }
    }
}
</script>