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
  <div class="flex relative mt-20 max-w-[1360px] mx-auto">
    <img
      class="h-[560px] w-[475px] object-cover"
      :src="slide?.images.gallery"
      :alt="slide?.name"
    />
    <div class="bg-white relative right-16 pl-16 h-[302px] w-[445px]">
      <h1 class="text-[56px] font-bold">{{ slide?.name }}</h1>
      <h2 class="text-[15px] text-gray mt-6">{{ slide?.artist.name }}</h2>
    </div>
    <img
      class="w-[128px] h-[128px] absolute bottom-0 left-[505px]"
      :src="slide?.artist.image"
      :alt="slide?.artist.name"
    />
    <div class="flex flex-col max-w-[350px] pt-[115px] relative right-16">
      <div
        class="text-[200px] text-very-light-gray font-bold z-[-1] absolute -top-20"
      >
        {{ slide?.year }}
      </div>
      <p class="leading-[28px] text-gray font-bold">
        {{ slide?.description }}
      </p>
      <a
        class="uppercase underline mt-20 tracking-[1.93px] text-[9px] font-bold text-gray"
        :href="slide?.source"
        target="_blank"
      >
        Go to source
      </a>
    </div>
  </div>
</template>
