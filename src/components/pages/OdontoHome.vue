<template>
  <!-- 
    A página agora é muito declarativa. Ela usa o organismo HeroSection
    e apenas se preocupa em fornecer o conteúdo e o asset (vídeo).
  -->
  <HeroSection :video-src="clinicVideo">
    <template #title> Excelência em Cuidado Odontológico </template>
    <template #subtitle> Transformando sorrisos com tecnologia e dedicação. </template>
  </HeroSection>

  <!-- Aqui você pode adicionar outros organismos, como a seção de serviços, etc. -->
</template>

<script setup>
import clinicVideo from '@/assets/videos/clinic-video.mp4';

import HeroSection from '@/components/organisms/HeroSection.vue';
</script>
