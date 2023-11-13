<script setup lang="ts">
  import { ref, computed } from 'vue';
  import items from '../../data.json';
  import { Slide } from '../types/slide';
  import TheSlide from './TheSlide.vue';

  const slides = computed(() => items);

  const currentSlideIndex = ref(0);
  const currentSlide = computed<Slide>(
    () => slides.value[currentSlideIndex.value]
  );

  const nextSlide = () => {
    if (currentSlideIndex.value < slides.value.length - 1) {
      currentSlideIndex.value++;
    }
  };

  const previousSlide = () => {
    if (currentSlideIndex.value > 0) {
      currentSlideIndex.value--;
    }
  };
</script>

<template>
  <div class="w-full flex flex-col justify-between h-full">
    <TheSlide :slide="currentSlide" />
    <footer
      class="w-full pb-[25px] border-t mt-16 md:mt-6 xl:mt-[75px] pt-6 px-6 md:px-10 border-very-light-gray flex justify-between"
    >
      <div>
        <div class="text-base font-bold">{{ currentSlide?.name }}</div>
        <div class="text-[10px] opacity-75 mt-2">
          {{ currentSlide?.artist.name }}
        </div>
      </div>
      <div class="flex items-center gap-6 md:gap-10">
        <button
          class="disabled:opacity-25"
          :disabled="currentSlideIndex === 0"
          @click="previousSlide"
        >
          <img
            src="./../../public/assets/shared/icon-back-button.svg"
            alt="icon-back-button"
            class="w-4 h-4"
          />
        </button>
        <button
          class="disabled:opacity-25"
          :disabled="currentSlideIndex === slides.length - 1"
          @click="nextSlide"
        >
          <img
            src="./../../public/assets/shared/icon-next-button.svg"
            alt="icon-next-button"
            class="w-4 h-4"
          />
        </button>
      </div>
    </footer>
  </div>
</template>
