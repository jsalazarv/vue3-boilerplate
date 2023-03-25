<template>
  <div class="product-card">
    <div class="image">
      <img :src="image" :alt="name" />
      <div class="hover-content">
        <a href="#" class="hover-image">
          <img src="/image/products/home-1/product-2.jpg" :alt="name" />
        </a>
        <div class="hover-btns">
          <a href="cart.html" class="sin-btn">
            <i class="ion-bag"></i>
          </a>
          <a
            href="javascript:"
            class="sin-btn"
            data-toggle="modal"
            data-target="#quickModal">
            <i class="ion-android-open"></i>
          </a>
        </div>
      </div>
      <span class="product-badge" v-if="isNew">new</span>
    </div>
    <div class="description-block">
      <div class="description-header">
        <h5 class="description-tag">
          <a href="#">#{{ sku }}</a>
        </h5>
      </div>
      <h3 class="post-title">
        <a href="#">{{ name }}</a>
      </h3>

      <p class="mb-0 price" v-if="price">
        <span class="price-new">${{ price }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
  name: String,
  sku: String,
  price: String,
  isNew: Boolean,
});
</script>
