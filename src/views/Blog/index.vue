<template>
  <div>
    <Banner
      bg-image="/image/others/bredcrumb-bg.jpg"
      title="Site Breadcrumb"
      page-name="Blog"
      :links="breadcrumbLinks" />

    <main class="inner-page-sec-padding-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 order-lg-2 mb--70 mb-lg--0">
            <div class="row space-dt--30">
              <div
                class="col-12 mt--30"
                v-for="(blog, index) in blogs"
                :key="index">
                <PostPreview
                  :image="blog.image.url"
                  :alt="blog.alt"
                  :month="blog.publication_date.month"
                  :day="blog.publication_date.day"
                  :title="blog.title"
                  :link="blog.link"
                  :author="blog.author.name"
                  :content="blog.short_description"
                  @onClick="redirectToDetail(blog.id)" />
              </div>
            </div>
          </div>
          <div class="col-lg-3 order-lg-1">
            <div class="inner-page-sidebar">
              <div class="single-block">
                <h2 class="sidebar-title">Search</h2>
                <div class="site-mini-search">
                  <input type="text" placeholder="Search" />
                  <button><i class="fas fa-search"></i></button>
                </div>
              </div>
              <div class="single-block">
                <h2 class="sidebar-title">BLOG ARCHIVES</h2>
                <ul class="sidebar-list">
                  <li><a href="#"> March 2015 (1)</a></li>
                  <li><a href="#">December 2014 (3)</a></li>
                  <li><a href="#">November 2014 (4)</a></li>
                  <li><a href="#">September 2014 (1)</a></li>
                  <li><a href="#">August 2014 (1)</a></li>
                </ul>
              </div>
              <div class="single-block">
                <h2 class="sidebar-title">RECENT POSTS</h2>
                <ul class="sidebar-list">
                  <li><a href="#"> Blog image post</a></li>
                  <li><a href="#">Post with Gallery</a></li>
                  <li><a href="#">Post with Audio</a></li>
                  <li><a href="#">Post with Video</a></li>
                  <li><a href="#">Maecenas ultricies</a></li>
                </ul>
              </div>
              <div class="single-block">
                <h2 class="sidebar-title">Tags</h2>
                <ul class="sidebar-tag-list">
                  <li><a href="#"> Chilled</a></li>
                  <li><a href="#">Dark</a></li>
                  <li><a href="#">Euro</a></li>
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Food</a></li>
                  <li><a href="#">Hardware</a></li>
                  <li><a href="#">Hat</a></li>
                  <li><a href="#">Hipster</a></li>
                  <li><a href="#">Holidays</a></li>
                  <li><a href="#">Light</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Place</a></li>
                  <li><a href="#">T-Shirt</a></li>
                  <li><a href="#">Travel</a></li>
                  <li><a href="#">Video-2</a></li>
                  <li><a href="#">White</a></li>
                </ul>
              </div>
              <!-- Promo Block -->
              <div class="single-block">
                <a href="" class="promo-image sidebar">
                  <img src="/image/others/sidebar-promotion-img.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Banner from '@/components/Banner/index.vue';
import PostPreview from '@/components/PostPreview/index.vue';
import blogData from '@/assets/json/blogs/index.json';

const breadcrumbLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
];
const blogs = ref(blogData);

const redirectToDetail = (id: number) => {
  navigateTo({
    path: `/blog/${id}`,
  });
};
</script>

<style scoped></style>
