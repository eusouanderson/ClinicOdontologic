<template>
  <HeroSection :video-src="clinicVideo">
    <template #title> Excelência em Cuidado Odontológico </template>
    <template #subtitle> Transformando sorrisos com tecnologia e dedicação. </template>
  </HeroSection>
</template>

<script setup>
import clinicVideo from '@/assets/videos/clinic-video.mp4';

import HeroSection from '@/components/organisms/HeroSection.vue';
</script>
