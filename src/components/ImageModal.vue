<script setup lang="ts">
  import { Image } from '../types/image';

  type Props = {
    image: Image;
  };

  defineProps<Props>();

  const emit = defineEmits(['closeImageModal']);
</script>

<template>
  <div
    class="fixed left-0 top-0 bg-[rgba(0,0,0,.85)] w-full h-full grid place-items-center p-10"
  >
    <div>
      <div class="relative bg-transparent">
        <div class="flex items-center justify-end">
          <button
            class="font-bold text-[14px] uppercase text-white tracking-[3px] mb-10"
            @click="emit('closeImageModal')"
          >
            Close
          </button>
        </div>
        <img class="object-contain" :src="image.url" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>
