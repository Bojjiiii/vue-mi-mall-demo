<template>
    <div>
        <order-header></order-header>
        Order
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<style scoped>
</style>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
    name: 'order',
    components: {
        OrderHeader,
        NavFooter,
    },
    mounted(){

    },
}
</script>