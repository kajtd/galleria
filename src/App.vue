<script setup lang="ts">
  import { ref } from 'vue';
  import ImageGallery from './components/ImageGallery.vue';
  import ImageSlideshow from './components/ImageSlideshow.vue';
  import TheHeader from './components/TheHeader.vue';

  const isSlideshowOn = ref(false);

  const toggleSlideshow = () => {
    isSlideshowOn.value = !isSlideshowOn.value;
  };
</script>

<template>
  <div class="my-0 mx-auto">
    <TheHeader
      :is-slideshow-on="isSlideshowOn"
      @toggle-slideshow="toggleSlideshow"
    />
    <ImageSlideshow v-if="isSlideshowOn" />
    <ImageGallery v-else />
  </div>
</template>
