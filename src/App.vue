<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
