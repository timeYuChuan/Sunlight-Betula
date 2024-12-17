<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/layouts/Header'
import Navigation from '@/layouts/Navigation'
</script>

<template>
    <Header />
    <div class="flex w-full"> 
        <Navigation />
        <RouterView />
    </div>
</template>

<style scoped>

</style>
