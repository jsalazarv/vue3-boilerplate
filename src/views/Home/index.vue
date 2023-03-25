<template>
  <main>
    <!-- TODO: Delete this section and replace it with the carousel -->
    <section
      class="hero-area section-margin"
      style="height: 100vh; background-color: #bcbcbc">
      <div class="d-flex justify-content-center align-items-center h-100">
        <swiper
          id="swiper-replace"
          :breakpoints="galleryBreakpoints"
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :navigation="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :modules="modules">
          <swiper-slide v-for="(image, i) in main_images" :key="i">
            <img :src="image.image_url" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- ---------------------------------------------------------- -->

    <section class="section-margin welcome-section">
      <div class="container">
        <div class="row justify-content-center section-padding border-bottom">
          <div class="col-lg-8">
            <div class="welcome-content">
              <h6 class="title-xs">{{ $t('home.whoIs.biography.title') }}</h6>
              <div class="section-title">
                <h2>{{ $t('home.whoIs.biography.name') }}</h2>
                <div class="title-sep">
                  <img src="/image/icon/title-sep-icon.png" alt="" />
                </div>
              </div>
              <div class="position-relative">
                <article
                  class="welcome-description"
                  :class="{ paragraph: !showBiography }">
                  <p>{{ $t('home.whoIs.biography.paragraph1') }}</p>
                  <p>{{ $t('home.whoIs.biography.paragraph2') }}</p>
                  <p>{{ $t('home.whoIs.biography.paragraph3') }}</p>
                  <p>{{ $t('home.whoIs.biography.paragraph4') }}</p>
                </article>
                <div :class="{ gradient: !showBiography }">
                  <span
                    class="font-weight-mid text-black text-uppercase cursor-pointer hover-color"
                    @click="onShowBiography">
                    {{ $t('home.whoIs.showMore') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t('home.featuredCollections.title') }}</h2>
          <p>{{ $t('home.featuredCollections.subtitle') }}</p>
        </div>
        <div class="ha-custom-tab">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li
              class="nav-item"
              v-for="(collection, index) in collections"
              :key="index">
              <a
                class="nav-link cursor-pointer"
                :class="{ active: activeTab === index }"
                @click="activeTab = index">
                {{ collection.title }}
              </a>
            </li>
          </ul>
          <div class="tab-content space-db--30">
            <div
              class="tab-pane fade"
              :class="{ 'show active': activeTab === index }"
              v-for="(collection, index) in collections"
              :key="index">
              <div class="row">
                <div
                  class="col-lg-3 col-sm-6 mb--30"
                  v-for="(picture, pictureIndex) in collection.pictures"
                  :key="pictureIndex">
                  <ProductCard
                    :isNew="collection.is_new_collection"
                    :image="picture.images[0].url"
                    :name="picture.title"
                    :price="picture.price"
                    :sku="picture.sku" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TODO: Delete this section and replace it with the carousel -->
    <section
      class="bg-image section-margin section-padding section-padding-top"
      data-bg="/image/bg-images/home-1/bg-testimonial.jpg"
      style="height: 50vh; background-color: #bcbcbc">
      <div class="d-flex justify-content-center align-items-center h-100">
        <swiper
          id="swiper-replace"
          :breakpoints="galleryBreakpoints"
          :navigation="galleryNavigation"
          :modules="modules">
          <swiper-slide v-for="(image, i) in images" :key="i">
            <img :src="image.image_url" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- ---------------------------------------------------------- -->

    <section class="section-padding">
      <div class="container">
        <div class="section-title mb--55">
          <h2>Latest Products</h2>
          <p>
            Mirum est notare quam littera gothica, quam nunc putamus parum
            claram anteposuerit litterarum formas.
          </p>
        </div>
        <swiper
          id="swiper-replace"
          :breakpoints="cardBreakpoints"
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :navigation="true"
          :modules="modules">
          <swiper-slide>
            <div class="product-card">
              <div class="image">
                <img src="image/products/home-1/product-1.jpg" alt="" />
                <div class="hover-content">
                  <a href="product-details.html" class="hover-image">
                    <img src="image/products/home-1/product-2.jpg" alt="" />
                  </a>

                  <div class="hover-btns">
                    <a href="cart.html" class="sin-btn"
                      ><i class="ion-bag"></i
                    ></a>
                    <a href="compare.html" class="sin-btn"
                      ><i class="ion-android-options"></i
                    ></a>
                    <a
                      href="javascript:"
                      class="sin-btn"
                      data-toggle="modal"
                      data-target="#quickModal"
                      ><i class="ion-android-open"></i
                    ></a>
                  </div>
                </div>
                <span class="product-badge">new</span>
                <span class="product-badge-2">-5%</span>
              </div>
              <div class="description-block">
                <div class="description-header">
                  <h5 class="description-tag">
                    <a href="">Fashion Manufacturer</a>
                  </h5>
                  <div class="rating-block">
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline"></span>
                    <span class="ion-android-star-outline"></span>
                  </div>
                </div>
                <h3 class="post-title">
                  <a href="product-details.html">
                    zyfg men sweatshirts casual ethnic style pattern</a
                  >
                </h3>

                <p class="mb-0 price">
                  <del class="price-old">€500.00</del>
                  <span class="price-new">€500.00</span>
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="product-card">
              <div class="image">
                <img src="image/products/home-1/product-3.jpg" alt="" />
                <div class="hover-content">
                  <a href="product-details.html" class="hover-image">
                    <img src="image/products/home-1/product-4.jpg" alt="" />
                  </a>

                  <div class="hover-btns">
                    <a href="cart.html" class="sin-btn"
                      ><i class="ion-bag"></i
                    ></a>
                    <a href="compare.html" class="sin-btn"
                      ><i class="ion-android-options"></i
                    ></a>
                    <a
                      href="javascript:"
                      class="sin-btn"
                      data-toggle="modal"
                      data-target="#quickModal"
                      ><i class="ion-android-open"></i
                    ></a>
                  </div>
                </div>
                <span class="product-badge">new</span>
                <span class="product-badge-2">-5%</span>
              </div>
              <div class="description-block">
                <div class="description-header">
                  <h5 class="description-tag">
                    <a href="">Fashion Manufacturer</a>
                  </h5>
                  <div class="rating-block">
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline"></span>
                    <span class="ion-android-star-outline"></span>
                  </div>
                </div>
                <h3 class="post-title">
                  <a href="product-details.html">
                    zyfg men sweatshirts casual ethnic style pattern</a
                  >
                </h3>

                <p class="mb-0 price">
                  <del class="price-old">€500.00</del>
                  <span class="price-new">€500.00</span>
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="product-card">
              <div class="image">
                <img src="image/products/home-1/product-5.jpg" alt="" />
                <div class="hover-content">
                  <a href="product-details.html" class="hover-image">
                    <img src="image/products/home-1/product-6.jpg" alt="" />
                  </a>

                  <div class="hover-btns">
                    <a href="cart.html" class="sin-btn"
                      ><i class="ion-bag"></i
                    ></a>
                    <a href="compare.html" class="sin-btn"
                      ><i class="ion-android-options"></i
                    ></a>
                    <a
                      href="javascript:"
                      class="sin-btn"
                      data-toggle="modal"
                      data-target="#quickModal"
                      ><i class="ion-android-open"></i
                    ></a>
                  </div>
                </div>
                <span class="product-badge">new</span>
                <span class="product-badge-2">-5%</span>
              </div>
              <div class="description-block">
                <div class="description-header">
                  <h5 class="description-tag">
                    <a href="">Fashion Manufacturer</a>
                  </h5>
                  <div class="rating-block">
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline"></span>
                    <span class="ion-android-star-outline"></span>
                  </div>
                </div>
                <h3 class="post-title">
                  <a href="product-details.html">
                    zyfg men sweatshirts casual ethnic style pattern</a
                  >
                </h3>

                <p class="mb-0 price">
                  <del class="price-old">€500.00</del>
                  <span class="price-new">€500.00</span>
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="product-card">
              <div class="image">
                <img src="image/products/home-1/product-7.jpg" alt="" />
                <div class="hover-content">
                  <a href="product-details.html" class="hover-image">
                    <img src="image/products/home-1/product-8.jpg" alt="" />
                  </a>

                  <div class="hover-btns">
                    <a href="cart.html" class="sin-btn"
                      ><i class="ion-bag"></i
                    ></a>
                    <a href="compare.html" class="sin-btn"
                      ><i class="ion-android-options"></i
                    ></a>
                    <a
                      href="javascript:"
                      class="sin-btn"
                      data-toggle="modal"
                      data-target="#quickModal"
                      ><i class="ion-android-open"></i
                    ></a>
                  </div>
                </div>
                <span class="product-badge">new</span>
                <span class="product-badge-2">-5%</span>
              </div>
              <div class="description-block">
                <div class="description-header">
                  <h5 class="description-tag">
                    <a href="">Fashion Manufacturer</a>
                  </h5>
                  <div class="rating-block">
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline"></span>
                    <span class="ion-android-star-outline"></span>
                  </div>
                </div>
                <h3 class="post-title">
                  <a href="product-details.html">
                    zyfg men sweatshirts casual ethnic style pattern</a
                  >
                </h3>

                <p class="mb-0 price">
                  <del class="price-old">€500.00</del>
                  <span class="price-new">€500.00</span>
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="product-card">
              <div class="image">
                <img src="image/products/home-1/product-9.jpg" alt="" />
                <div class="hover-content">
                  <a href="product-details.html" class="hover-image">
                    <img src="image/products/home-1/product-10.jpg" alt="" />
                  </a>

                  <div class="hover-btns">
                    <a href="cart.html" class="sin-btn"
                      ><i class="ion-bag"></i
                    ></a>
                    <a href="compare.html" class="sin-btn"
                      ><i class="ion-android-options"></i
                    ></a>
                    <a
                      href="javascript:"
                      class="sin-btn"
                      data-toggle="modal"
                      data-target="#quickModal"
                      ><i class="ion-android-open"></i
                    ></a>
                  </div>
                </div>
                <span class="product-badge">new</span>
                <span class="product-badge-2">-5%</span>
              </div>
              <div class="description-block">
                <div class="description-header">
                  <h5 class="description-tag">
                    <a href="">Fashion Manufacturer</a>
                  </h5>
                  <div class="rating-block">
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline"></span>
                    <span class="ion-android-star-outline"></span>
                  </div>
                </div>
                <h3 class="post-title">
                  <a href="product-details.html">
                    zyfg men sweatshirts casual ethnic style pattern</a
                  >
                </h3>

                <p class="mb-0 price">
                  <del class="price-old">€500.00</del>
                  <span class="price-new">€500.00</span>
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="product-card">
              <div class="image">
                <img src="image/products/home-1/product-11.jpg" alt="" />
                <div class="hover-content">
                  <a href="product-details.html" class="hover-image">
                    <img src="image/products/home-1/product-12.jpg" alt="" />
                  </a>

                  <div class="hover-btns">
                    <a href="cart.html" class="sin-btn"
                      ><i class="ion-bag"></i
                    ></a>
                    <a href="compare.html" class="sin-btn"
                      ><i class="ion-android-options"></i
                    ></a>
                    <a
                      href="javascript:"
                      class="sin-btn"
                      data-toggle="modal"
                      data-target="#quickModal"
                      ><i class="ion-android-open"></i
                    ></a>
                  </div>
                </div>
                <span class="product-badge">new</span>
                <span class="product-badge-2">-5%</span>
              </div>
              <div class="description-block">
                <div class="description-header">
                  <h5 class="description-tag">
                    <a href="">Fashion Manufacturer</a>
                  </h5>
                  <div class="rating-block">
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline star_on"></span>
                    <span class="ion-android-star-outline"></span>
                    <span class="ion-android-star-outline"></span>
                  </div>
                </div>
                <h3 class="post-title">
                  <a href="product-details.html">
                    zyfg men sweatshirts casual ethnic style pattern</a
                  >
                </h3>

                <p class="mb-0 price">
                  <del class="price-old">€500.00</del>
                  <span class="price-new">€500.00</span>
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="section-padding">
      <h2 class="sr-only">Promotion Imgaes</h2>
      <div class="container">
        <div class="row space-db--30">
          <div class="col-lg-6 mb--30">
            <a href="#" class="overflow-image">
              <img src="/image/others/promo-images.jpg" alt="" />
            </a>
          </div>
          <div class="col-lg-6 mb--30">
            <a href="#" class="overflow-image">
              <img src="/image/others/promo-images-2.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-margin">
      <h2 class="sr-only">Method section</h2>
      <div class="container">
        <div class="row border-bottom section-padding space-dt--30">
          <div class="col-md-4 col-sm-6 mt--30">
            <div class="method-card">
              <div class="icon">
                <img src="/image/icon/method-icon-1.png" alt="" />
              </div>
              <article class="text">
                <h3 class="method-title">
                  <a href="#">FREE SHIPPING WORLDWIDE</a>
                </h3>
                <p>
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  claram
                </p>
              </article>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mt--30">
            <div class="method-card">
              <div class="icon">
                <img src="/image/icon/method-icon-2.png" alt="" />
              </div>
              <article class="text">
                <h3 class="method-title">
                  <a href="#">MONEY BACK GUARANTEE</a>
                </h3>
                <p>
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  claram
                </p>
              </article>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mt--30">
            <div class="method-card">
              <div class="icon">
                <img src="/image/icon/method-icon-3.png" alt="" />
              </div>
              <article class="text">
                <h3 class="method-title">
                  <a href="#">ONLINE SUPPORT 24/7</a>
                </h3>
                <p>
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  claram
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container">
        <div class="section-title mb--25">
          <h2>{{ $t('home.latestBlog.title') }}</h2>
          <p>{{ $t('home.latestBlog.subtitle') }}</p>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 mt--30"
            v-for="(blog, index) in blogs"
            :key="index">
            <PostPreview
              vertical
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
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '@/components/ProductCard/index.vue';
import PostPreview from '@/components/PostPreview/index.vue';
import collectionsData from '@/assets/json/collections/index.json';
import blogData from '@/assets/json/blogs/index.json';

const main_images = [
  { image_url: 'image/bg-images/home-1/home-slider-image-2.jpg' },
  { image_url: 'image/bg-images/home-1/home-slider-image-2.jpg' },
  { image_url: 'image/bg-images/home-1/home-slider-image-2.jpg' },
  { image_url: 'image/bg-images/home-1/home-slider-image-2.jpg' },
];
const images = [
  { image_url: 'image/bg-images/home-1/bg-testimonial.jpg' },
  { image_url: 'image/bg-images/home-1/bg-testimonial.jpg' },
  { image_url: 'image/bg-images/home-1/bg-testimonial.jpg' },
  { image_url: 'image/bg-images/home-1/bg-testimonial.jpg' },
];
const galleryBreakpoints = {
  10: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};
const cardBreakpoints = {
  320: {
    slidesPerView: 2.5,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 4.5,
    spaceBetween: 10,
  },
};
const galleryNavigation = {
  enabled: true,
  nextEl: '.arrow-right',
  prevEl: '.arrow-left',
};

const modules = [Navigation];

const blogs = ref(blogData);
const collections = ref(collectionsData);
const activeTab = ref(0);
const showBiography = ref(false);

const redirectToDetail = (id: number) => {
  navigateTo({
    path: `/blog/${id}`,
  });
};

const onShowBiography = () => {
  showBiography.value = !showBiography.value;
};

/*const userService = useUserService();

onMounted(async () => {
  const users = await userService.fetchAll();
  console.log("[Users]", users);
});*/
</script>

<style scoped>
.paragraph {
  overflow: hidden;
  max-height: 9rem;
}

.gradient {
  padding-top: 8rem;
  background: linear-gradient(to top, #ffffff 0%, rgba(15, 23, 42, 0) 60%);
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5px;
}
</style>
