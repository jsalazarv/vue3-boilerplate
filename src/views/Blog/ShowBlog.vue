<template>
  <div>
    <Banner
      bg-image="/image/others/bredcrumb-bg.jpg"
      title="Site Breadcrumb"
      page-name="Blog Details"
      :links="breadcrumbLinks" />

    <main class="blog-page-section inner-page-sec-padding-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 order-lg-2 mb--70 mb-lg--0">
            <div class="blog-post post-details mb--50">
              <div class="blog-image">
                <img src="/image/others/blog-details-slider-1.png" alt="" />
              </div>

              <div class="blog-content mt--30">
                <header>
                  <div class="post-category text-primary">
                    <i class="fas fa-folder"></i>
                    <a href="#">Wordpress</a>,
                    <a href="#">Fasion</a>
                  </div>
                  <h3 class="blog-title">
                    <a href="blog-details.html">Blog image post </a>
                  </h3>
                  <div class="post-meta">
                    <span class="post-author">
                      <i class="fas fa-user"></i>
                      <span class="text-gray">Posted by : </span>
                      admin
                    </span>
                    <span class="post-separator">|</span>
                    <span class="post-date">
                      <i class="far fa-calendar-alt"></i>
                      <span class="text-gray">On : </span>
                      March 10, 2015
                    </span>
                  </div>
                </header>
                <article>
                  <h3 class="d-none sr-only">blob-article</h3>
                  <p class="p-0">
                    Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                    pretium arcu ex. Aenean posuere libero eu augue condimentum
                    rhoncus. Praesent ornare tortor ac ante egestas hendrerit.
                    Aliquam et metus pharetra, bibendum massa nec, fermentum
                    odio. Nunc id leo ultrices, mollis ligula in, finibus
                    tortor. Mauris eu dui ut lectus fermentum eleifend.
                    Pellentesque faucibus sem ante, non malesuada odio varius
                    nec. Suspendisse potenti.
                  </p>

                  <blockquote>
                    <p>
                      Quisque semper nunc vitae erat pellentesque, ac placerat
                      arcu consectetur. In venenatis elit ac ultrices convallis.
                      Duis est nisi, tincidunt ac urna sed, cursus blandit
                      lectus. In ullamcorper sit amet ligula ut eleifend. Proin
                      dictum tempor ligula, ac feugiat metus. Sed finibus tortor
                      eu scelerisque scelerisque.
                    </p>
                  </blockquote>
                  <p>
                    Aenean et tempor eros, vitae sollicitudin velit. Etiam
                    varius enim nec quam tempor, sed efficitur ex ultrices.
                    Phasellus pretium est vel dui vestibulum condimentum. Aenean
                    nec suscipit nibh. Phasellus nec lacus id arcu facilisis
                    elementum. Curabitur lobortis, elit ut elementum congue,
                    erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis
                    suscipit metus ante, sed convallis quam posuere quis. Ut
                    tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc
                    vitae lacus eget lectus imperdiet tempus sed in dui. Nam
                    molestie magna at risus consectetur, placerat suscipit justo
                    dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.
                  </p>

                  <p>
                    Suspendisse turpis ipsum, tempus in nulla eu, posuere
                    pharetra nibh. In dignissim vitae lorem non mollis. Praesent
                    pretium tellus in tortor viverra condimentum. Nullam
                    dignissim facilisis nisl, accumsan placerat justo ultricies
                    vel. Vivamus finibus mi a neque pretium, ut convallis dui
                    lacinia. Morbi a rutrum velit. Curabitur sagittis quam quis
                    consectetur mattis. Aenean sit amet quam vel turpis interdum
                    sagittis et eget neque. Nunc ante quam, luctus et neque a,
                    interdum iaculis metus. Aliquam vel ante mattis, placerat
                    orci id, vehicula quam. Suspendisse quis eros cursus,
                    viverra urna sed, commodo mauris. Cras diam arcu, fringilla
                    a sem condimentum, viverra facilisis nunc. Curabitur vitae
                    orci id nulla maximus maximus. Nunc pulvinar sollicitudin
                    molestie.
                  </p>
                </article>
                <footer class="blog-meta">
                  <div>
                    <a href="#">3 comments </a>/ TAGS: <a href="#">fashion</a>,
                    <a href="#">t-shirt</a>, <a href="#">white</a>
                  </div>
                </footer>
              </div>
            </div>
            <div class="share-block mb--50">
              <h3>Share Now</h3>
              <div class="social-links justify-content-center mt--10">
                <a href="#" class="single-social social-rounded"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" class="single-social social-rounded"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#" class="single-social social-rounded"
                  ><i class="fab fa-pinterest-p"></i
                ></a>
                <a href="#" class="single-social social-rounded"
                  ><i class="fab fa-google-plus-g"></i
                ></a>
                <a href="#" class="single-social social-rounded"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 order-1">
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
import Banner from '@/components/Banner/index.vue';

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
</script>

<style scoped></style>
