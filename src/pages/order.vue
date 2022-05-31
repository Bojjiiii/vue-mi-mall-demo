<template>
    <div>
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
    name: 'order',
    components: {
        NavHeader,
        NavFooter,
    },
    mounted(){

    },
}
</script>