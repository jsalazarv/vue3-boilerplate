<template>
  <div>
    <Banner
      bg-image="/image/others/bredcrumb-bg.jpg"
      title="Site Breadcrumb"
      page-name="Cart"
      :links="breadcrumbLinks" />

    <main class="cart-page-main-block inner-page-sec-padding-top">
      <div class="cart_area cart-area-padding sp-inner-page--top">
        <div class="container">
          <div class="page-section-title">
            <h1>SHOPPING CART</h1>
          </div>
          <div class="row">
            <div class="col-12">
              <form action="#" class="">
                <!-- Cart Table -->
                <div class="cart-table table-responsive mb--40">
                  <table class="table">
                    <!-- Head Row -->
                    <thead>
                      <tr>
                        <th class="pro-remove"></th>
                        <th class="pro-thumbnail">Image</th>
                        <th class="pro-title">Product</th>
                        <th class="pro-price">Price</th>
                        <th class="pro-quantity">Quantity</th>
                        <th class="pro-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Product Row -->
                      <tr>
                        <td class="pro-remove">
                          <a href="#"><i class="far fa-trash-alt"></i></a>
                        </td>
                        <td class="pro-thumbnail">
                          <a href="#"
                            ><img
                              src="/image/products/home-1/product-1.jpg"
                              alt="Product"
                          /></a>
                        </td>
                        <td class="pro-title">
                          <a href="#">Rinosin Glasses</a>
                        </td>
                        <td class="pro-price"><span>$395.00</span></td>
                        <td class="pro-quantity">
                          <div class="pro-qty">
                            <div class="count-input-block">
                              <input
                                type="number"
                                class="form-control text-center"
                                value="1" />
                            </div>
                          </div>
                        </td>
                        <td class="pro-subtotal"><span>$395.00</span></td>
                      </tr>
                      <!-- Product Row -->
                      <tr>
                        <td class="pro-remove">
                          <a href="#"><i class="far fa-trash-alt"></i></a>
                        </td>
                        <td class="pro-thumbnail">
                          <a href="#"
                            ><img
                              src="/image/products/home-1/product-2.jpg"
                              alt="Product"
                          /></a>
                        </td>
                        <td class="pro-title">
                          <a href="#">Rinosin Glasses</a>
                        </td>
                        <td class="pro-price"><span>$395.00</span></td>
                        <td class="pro-quantity">
                          <div class="pro-qty">
                            <div class="count-input-block">
                              <input
                                type="number"
                                class="form-control text-center"
                                value="1" />
                            </div>
                          </div>
                        </td>
                        <td class="pro-subtotal"><span>$395.00</span></td>
                      </tr>
                      <!-- Discount Row  -->
                      <tr>
                        <td colspan="6" class="actions">
                          <div class="coupon-block">
                            <div class="coupon-text">
                              <label for="coupon_code">Coupon:</label>
                              <input
                                type="text"
                                name="coupon_code"
                                class="input-text"
                                id="coupon_code"
                                value=""
                                placeholder="Coupon code" />
                            </div>
                            <div class="coupon-btn">
                              <input
                                type="submit"
                                class="btn-black"
                                name="apply_coupon"
                                value="Apply coupon" />
                            </div>
                          </div>

                          <div class="update-block text-right">
                            <input
                              type="submit"
                              class="btn-black"
                              name="update_cart"
                              value="Update cart" />
                            <input
                              type="hidden"
                              id="_wpnonce"
                              name="_wpnonce"
                              value="05741b501f" /><input
                              type="hidden"
                              name="_wp_http_referer"
                              value="/petmark/cart/" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-section-2 sp-inner-page--bottom">
        <div class="container">
          <div class="row">
            <!-- Cart Summary -->
            <div class="offset-0 offset-lg-6 col-lg-6 col-12 d-flex">
              <div class="cart-summary">
                <div class="cart-summary-wrap">
                  <h4><span>Cart Summary</span></h4>
                  <p>Sub Total <span class="text-primary">$1250.00</span></p>
                  <p>Shipping Cost <span class="text-primary">$00.00</span></p>
                  <h2>
                    Grand Total <span class="text-primary">$1250.00</span>
                  </h2>
                </div>
                <div class="cart-summary-button">
                  <RouterLink to="/checkout" class="checkout-btn c-btn">
                    {{ $t('menu.submenu.checkout') }}
                  </RouterLink>
                  <button class="update-btn c-btn">Update Cart</button>
                </div>
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
    title: 'Cart',
    url: '/cart',
  },
];
</script>

<style scoped></style>
