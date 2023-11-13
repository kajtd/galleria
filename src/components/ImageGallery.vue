<script setup lang="ts">
  import items from '../../data.json';
</script>

<template>
  <div
    class="px-6 md:px-10 max-w-[1360px] mx-auto w-full lg:columns-3 sm:columns-2 gap-6 md:gap-10"
  >
    <div
      v-for="item in items"
      :key="item.name"
      class="relative inline-block py-3 md:py-5 w-full"
    >
      <img class="" :src="item.images.gallery" :alt="item.name" />
      <div
        class="absolute bottom-3 lg:bottom-5 h-[170px] lg:max-h-[310px] pl-8 flex flex-col justify-end pb-9 gap-2 w-full bg-image-art-background z-40"
      >
        <div class="text-2xl font-bold text-white">
          {{ item.name }}
        </div>
        <div class="text-[13px] text-white opacity-75">
          {{ item.artist.name }}
        </div>
      </div>
    </div>
  </div>
</template>
