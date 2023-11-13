<script setup lang="ts">
  import { ref } from 'vue';
  import { Slide } from '../types/slide';
  import { Image } from '../types/image';
  import ImageModal from './ImageModal.vue';

  type Props = {
    slide: Slide;
  };

  defineProps<Props>();

  const image = ref<Image>({
    url: '',
    alt: '',
  });

  const isImageModalVisible = ref(false);

  const viewImage = (url = '', alt = '') => {
    image.value.url = url;
    image.value.alt = alt;
    isImageModalVisible.value = true;
    document.querySelector('body')?.classList.add('modal');
  };

  const closeImageModal = () => {
    isImageModalVisible.value = false;
    document.querySelector('body')?.classList.remove('modal');
  };
</script>

<template>
  <div
    class="flex flex-col xl:flex-row relative mt-0 md:mt-20 max-w-[1360px] mx-auto px-6 md:px-10 w-full"
  >
    <div class="relative">
      <img
        class="w-[327px] h-[280px] md:w-[475px] md:h-[560px] object-cover"
        :src="slide.images.gallery"
        :alt="slide.name"
      />
      <button
        class="absolute top-4 left-4 md:bottom-4 md:top-auto xl:left-4 xl:bottom-24 bg-[rgba(0,0,0,0.75)] transition-colors hover:bg-[rgba(255,255,255,0.25)] text-white flex items-center py-[14px] px-4 gap-[14px]"
        @click="viewImage(slide.images.gallery, slide.name)"
      >
        <img
          src="assets/shared/icon-view-image.svg"
          alt="view image icon"
          class="w-3 h-3"
        />
        <span class="text-[10px] uppercase font-bold">View Image</span>
      </button>
    </div>
    <div
      class="bg-white pt-6 relative bottom-16 right-8 pl-12 w-[280px] h-[133px] md:w-[445px] md:h-[302px] md:absolute md:top-0 xl:relative xl:right-16"
    >
      <h1 class="text-2xl md:text-[56px] md:leading-[64px] font-bold">
        {{ slide.name }}
      </h1>
      <h2 class="text-[15px] text-gray mt-6">{{ slide.artist.name }}</h2>
    </div>
    <img
      class="w-16 h-16 md:w-[128px] md:h-[128px] relative bottom-10 left-4 md:absolute md:top-[300px] md:left-[546px] xl:left-[550px] xl:top-[500px]"
      :src="slide.artist.image"
      :alt="slide.artist.name"
    />
    <div
      class="flex flex-col max-w-full xl:max-w-[350px] relative md:mt-16 md:max-w-[457px] md:mx-auto"
    >
      <div
        class="text-[100px] md:text-[200px] text-very-light-gray font-bold z-[-1] absolute -top-20 -right-2 md:-left-20 xl:-top-36"
      >
        {{ slide.year }}
      </div>
      <p
        class="leading-[28px] text-gray font-bold mt-6 max-w-[457px] mx-auto md:mt-16 xl:relative xl:right-16 xl:bottom-6"
      >
        {{ slide.description }}
      </p>
      <a
        class="uppercase underline mt-16 md:mt-20 tracking-[1.93px] text-[9px] font-bold transition-colors text-gray hover:text-black xl:relative xl:right-16"
        :href="slide.source"
        target="_blank"
      >
        Go to source
      </a>
    </div>
  </div>
  <ImageModal
    v-show="isImageModalVisible"
    :image="image"
    @close-image-modal="closeImageModal"
  />
</template>
