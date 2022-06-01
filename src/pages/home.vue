<template>
<!-- 承载首页、产品栈、商品详情 -->
    <div>
        !!home Page!!
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<style scoped>

</style>
<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
    name: 'home',
    components: {
        NavHeader,
        NavFooter,
    },
    mounted(){

    },
}
</script>