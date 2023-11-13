<script setup lang="ts">
  import { defineProps } from 'vue';
  import { Slide } from '../types/slide';

  withDefaults(
    defineProps<{
      slide: Slide | null;
    }>(),
    {
      slide: null,
    }
  );
</script>

<template>
  <div
    class="flex flex-col xl:flex-row relative mt-0 md:mt-20 max-w-[1360px] mx-auto px-6 md:px-10 w-full"
  >
    <img
      class="w-[327px] h-[280px] md:w-[475px] md:h-[560px] object-cover"
      :src="slide?.images.gallery"
      :alt="slide?.name"
    />
    <div
      class="bg-white pt-6 relative bottom-16 right-8 pl-12 w-[280px] h-[133px] md:w-[445px] md:h-[302px] md:absolute md:top-0 xl:relative xl:right-16"
    >
      <h1 class="text-2xl md:text-[56px] md:leading-[64px] font-bold">
        {{ slide?.name }}
      </h1>
      <h2 class="text-[15px] text-gray mt-6">{{ slide?.artist.name }}</h2>
    </div>
    <img
      class="w-16 h-16 md:w-[128px] md:h-[128px] relative bottom-10 left-4 md:absolute md:top-[300px] md:left-[546px] xl:left-[550px] xl:top-[500px]"
      :src="slide?.artist.image"
      :alt="slide?.artist.name"
    />
    <div
      class="flex flex-col max-w-full xl:max-w-[350px] relative md:mt-16 md:max-w-[457px] md:mx-auto"
    >
      <div
        class="text-[100px] md:text-[200px] text-very-light-gray font-bold z-[-1] absolute -top-20 -right-2 md:-left-20 xl:-top-36"
      >
        {{ slide?.year }}
      </div>
      <p
        class="leading-[28px] text-gray font-bold mt-6 max-w-[457px] mx-auto md:mt-16 xl:relative xl:right-16 xl:bottom-6"
      >
        {{ slide?.description }}
      </p>
      <a
        class="uppercase underline mt-16 md:mt-20 tracking-[1.93px] text-[9px] font-bold text-gray xl:relative xl:right-16"
        :href="slide?.source"
        target="_blank"
      >
        Go to source
      </a>
    </div>
  </div>
</template>
