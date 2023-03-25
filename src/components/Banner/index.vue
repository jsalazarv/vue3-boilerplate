<template>
  <section class="bg-image" :style="bgStyle" :data-bg="bgImage">
    <h2 class="sr-only">{{ title }}</h2>
    <div class="container">
      <div class="breadcrumb-contents">
        <nav aria-label="breadcrumb">
          <h2 class="page-name">{{ pageName }}</h2>
          <ol class="breadcrumb">
            <li
              class="breadcrumb-item"
              v-for="(link, index) in links"
              :key="index">
              <RouterLink :to="link.url">{{ link.title }}</RouterLink>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ILink } from '@/components/Banner/types';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  pageName: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
    validator: (value: ILink[]) => {
      return value.every((link) => link.title && link.url);
    },
  },
  bgImage: {
    type: String,
    required: false,
    default: '',
  },
});

const bgStyle = computed(() => {
  return { backgroundImage: `url(${props.bgImage})` };
});
</script>

<style scoped></style>
