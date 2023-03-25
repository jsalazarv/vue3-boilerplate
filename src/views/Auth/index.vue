<template>
  <div>
    <Banner
      bg-image="http://localhost:3001/image/others/bredcrumb-bg.jpg"
      title="Site Breadcrumb"
      page-name="Auth"
      :links="breadcrumbLinks" />

    <main class="page-section inner-page-sec-padding-top">
      <div class="container">
        <header class="entry-header">
          <h1 class="entry-title">My Account</h1>
        </header>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
            <!-- Login Form s-->
            <form action="./">
              <h4 class="login-title">Login</h4>
              <div class="login-form">
                <div class="row">
                  <div class="col-md-12 col-12 mb--20">
                    <label>Username or email address *</label>
                    <input class="mb-0" type="email" />
                  </div>
                  <div class="col-12 mb--20">
                    <label>Password</label>
                    <input class="mb-0" type="password" />
                  </div>
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap">
                      <a href="#" class="btn btn-black mr-3">Login</a>
                      <div class="d-inline-flex align-items-center">
                        <input
                          type="checkbox"
                          id="accept_terms"
                          class="mb-0 mr-1" />
                        <label for="accept_terms" class="mb-0 font-weight-400"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <p>
                      <a href="#" class="pass-lost mt-3">Lost your password?</a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
            <form action="./">
              <h4 class="login-title">Register</h4>
              <div class="login-form">
                <div class="row">
                  <div class="col-md-12 col-12 mb--20">
                    <label>Email Address*</label>
                    <input class="mb-0" type="email" />
                  </div>
                  <div class="col-12 mb--20">
                    <label>Password</label>
                    <input class="mb-0" type="password" />
                  </div>
                  <div class="col-md-12">
                    <a href="#" class="btn btn-black">Register</a>
                  </div>
                </div>
              </div>
            </form>
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
    title: 'Auth',
    url: '/auth',
  },
];
</script>

<style scoped></style>
