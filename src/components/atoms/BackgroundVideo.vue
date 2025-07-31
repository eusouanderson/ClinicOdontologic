<template>
  <video
    autoplay
    loop
    muted
    playsinline
    :src="videoSrc"
    class="absolute w-full h-full object-cover top-0 left-0 z-0"
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
