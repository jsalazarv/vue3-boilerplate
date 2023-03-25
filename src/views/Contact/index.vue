<template>
  <div>
    <Banner
      bg-image="/image/others/bredcrumb-bg.jpg"
      title="Site Breadcrumb"
      page-name="Contact"
      :links="breadcrumbLinks" />

    <main class="contact_area section-padding pt--60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="gogle_map">
              <div id="googleMap">
                <!-- TODO: map component -->
              </div>
            </div>
          </div>
        </div>
        <div class="row mt--60 space-db--30">
          <div class="col-lg-5 col-md-5 col-12">
            <div class="contact_adress">
              <div class="ct_address">
                <h3 class="ct_title">{{ $t('contact.title') }}</h3>
                <p>{{ $t('contact.subtitle') }}</p>
              </div>

              <div class="address_wrapper">
                <div class="address">
                  <div class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-info-text">
                    <p>
                      <span class="mr-2">
                        {{ $t('contact.contact.address') }}:
                      </span>
                      {{ author[0].addresses[0].zip }} -
                      {{ author[0].addresses[0].street }}
                      <br />
                      {{ author[0].addresses[0].city }},
                      {{ author[0].addresses[0].country }}
                    </p>
                  </div>
                </div>

                <div class="address">
                  <div class="icon">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="contact-info-text">
                    <p>
                      <span class="mr-2">
                        {{ $t('contact.contact.email') }}:
                      </span>
                      {{ author[0].contact.email }}
                    </p>
                  </div>
                </div>

                <div class="address">
                  <div class="icon">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div class="contact-info-text">
                    <p>
                      <span class="mr-2">
                        {{ $t('contact.contact.phone') }}:
                      </span>
                      {{ author[0].contact.phone }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-12 mt-sm--30 mt-md--0">
            <div class="contact_form">
              <h3 class="ct_title">{{ $t('contact.form.title') }}</h3>

              <form
                id="contact-form"
                action="php/mail.php"
                method="post"
                class="contact-form">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>
                        {{ $t('contact.form.labels.name') }}
                        <span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        id="customername"
                        class="form-control"
                        required />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>
                        {{ $t('contact.form.labels.email') }}
                        <span class="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="customerEmail"
                        id="customerEmail"
                        class="form-control"
                        required />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>{{ $t('contact.form.labels.subject') }}</label>
                      <input
                        type="text"
                        name="contactSubject"
                        class="form-control"
                        id="contactSubject" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>{{ $t('contact.form.labels.message') }}</label>
                      <textarea
                        name="contactMessage"
                        class="form-control"
                        id="contactMessage"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-btn">
                      <button
                        type="submit"
                        value="submit"
                        id="submit"
                        class="btn btn-black"
                        name="submit">
                        {{ $t('contact.form.send') }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="form-output">
                <p class="form-messege"></p>
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
import authorData from '@/assets/json/author/index.json';

const breadcrumbLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];
const author = ref(authorData);
</script>

<style scoped></style>
