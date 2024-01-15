<template>
	<HomeHeader />
	<RouterView />
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped></style>
