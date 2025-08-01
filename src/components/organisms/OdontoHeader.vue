<template>
  <v-app-bar app flat class="bg-brand-primary border-b border-brand-primary/20" height="80">
    <OdontoLogo />
    <v-spacer />

    <div class="hidden md:flex items-center gap-4">
      <OdontoNavBar />
    </div>

    <div class="hidden md:flex items-center">
      <OdontoAc />
    </div>

    <div class="flex md:hidden items-center">
      <OdontoHb />
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import OdontoNavBar from '@/components/ui/header/OdontoNavBar.vue';
import OdontoAc from '@/components/ui/header/OdontoAc.vue';
import OdontoLogo from '@/components/ui/header/OdontoLogo.vue';
import OdontoHb from '@/components/ui/header/OdontoHb.vue';

const drawer = ref(false);
</script>

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: normal;
}

.router-link-active {
  color: rgb(var(--color-brand-primary));
}

.router-link-active span {
  width: 100% !important;

  background-color: rgb(var(--color-brand-primary)) !important;
}
</style>
