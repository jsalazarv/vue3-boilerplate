<template>
  <div
    class="modal fade modal-quick-view"
    :class="{ show: isOpenDialog }"
    id="quickModal"
    tabindex="-1"
    role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button
          type="button"
          class="close modal-close-btn ml-auto"
          data-dismiss="modal"
          aria-label="Close"
          @click="onCloseModal">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="product-details-modal">
          <div class="row">
            <div class="col-lg-5">
              <!-- Product Details Slider Big Image-->
            </div>
            <div class="col-lg-7 mt--30 mt-lg--30">
              <div class="product-details-description pl-lg--30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                dicta laborum voluptatem? Adipisci autem beatae fugit ipsa iusto
                mollitia odit perspiciatis praesentium quisquam voluptate.
                Architecto deleniti fugit illum necessitatibus recusandae.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import blogData from 'assets/json/blogs/index.json';

const props = defineProps({
  product: Object,
  isOpenDialog: Boolean,
});

const isOpenDialog = ref(props.isOpenDialog);

const onCloseModal = () => {
  isOpenDialog.value = !isOpenDialog.value;
};

watch(
  () => props.isOpenDialog,
  (newVal) => {
    isOpenDialog.value = newVal;
  },
);

onMounted(() => {
  console.log('[OPEN]', props.isOpenDialog);
});
</script>

<style scoped></style>
