<template>
    <div>
        <order-header></order-header>
        Cart
        <nav-footer></nav-footer>
    </div>
</template>
<style scoped>
</style>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
    name: 'cart',
    components: {
        OrderHeader,
        NavFooter,
    },
    mounted(){

    },
}
</script>