<template>
  <section class="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
    <BackgroundVideo :video-src="videoSrc" />

    <div class="absolute w-full h-full top-0 left-0 bg-brand-gradient/10 z-10"></div>

    <div class="relative z-20 p-6">
      <v-container fluid>
        <v-row justify="center" align="center" class="w-full">
          <v-col cols="12" md="10" lg="8">
            <HeroContent>
              <template #title>
                <slot name="title"></slot>
              </template>
              <template #subtitle>
                <slot name="subtitle"></slot>
              </template>
            </HeroContent>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script setup>
import BackgroundVideo from '@/components/atoms/BackgroundVideo.vue';
import HeroContent from '@/components/molecules/HeroContent.vue';

defineProps({
  videoSrc: {
    type: String,
    required: true,
  },
});
</script>
