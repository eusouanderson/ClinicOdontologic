<template>
  <video
    autoplay
    loop
    muted
    playsinline
    :src="videoSrc"
    class="absolute w-full h-full object-cover left-0 z-0"
  ></video>
</template>

<script setup>
defineProps({
  videoSrc: {
    type: String,
    required: true,
  },
});
</script>
