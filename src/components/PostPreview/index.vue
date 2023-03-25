<template>
  <div class="blog-card card-style-list">
    <div class="row">
      <div
        class="col-lg-6 col-md-6"
        :class="{
          'col-lg-12 col-md-12': vertical,
        }">
        <a :href="image" data-fancybox class="blog-image">
          <img :src="image" :alt="alt" />
          <div class="date-badge">
            <span class="month">{{ month }}</span>
            <h5>{{ day }}</h5>
          </div>
          <div class="plus-icon">
            <i class="fas fa-plus-circle"></i>
          </div>
        </a>
      </div>
      <div
        class="col-lg-6 col-md-6"
        :class="{
          'col-lg-12 col-md-12': vertical,
        }">
        <div
          class="text"
          :class="{
            'mt--15': vertical,
          }">
          <h3 class="blog-title" @click="handleTitleClick">
            {{ title }}
          </h3>
          <span class="post-meta">
            <i class="fas fa-user"></i>
            {{ author }}
          </span>
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
  alt: String,
  month: String,
  day: String,
  title: String,
  link: String,
  author: String,
  content: String,
  vertical: Boolean,
  onClick: Function,
});

const emits = defineEmits(['onClick']);

const handleTitleClick = () => {
  emits('onClick');
};
</script>

<style scoped></style>
