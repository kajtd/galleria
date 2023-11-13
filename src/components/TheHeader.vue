<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  defineProps({
    isSlideshowOn: Boolean,
  });

  const emit = defineEmits(['toggleSlideshow']);
</script>

<template>
  <header class="p-6 md:p-10 max-w-[1360px] mx-auto">
    <nav
      class="w-full flex justify-between items-center border-b border-light-gray pb-6 md:pb-10 mb-3 md:mb-5"
    >
      <img
        src="./../../public/assets/shared/logo.svg"
        alt=""
        class="w-[113px] md:w-[169px]"
      />
      <button
        class="font-bold text-[9px] md:text-xs uppercase transition-colors text-gray hover:text-black tracking-[1.93px] md:tracking-[2.57px]"
        @click="emit('toggleSlideshow')"
      >
        {{ isSlideshowOn ? 'Stop Slideshow' : 'Start Slideshow' }}
      </button>
    </nav>
  </header>
</template>
